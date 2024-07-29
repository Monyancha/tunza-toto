import {
  Button,
  Modal,
  Textarea,
  TextInput,
  useMantineTheme,
  Select,
  Alert,
} from "@mantine/core";
import { useSession } from "next-auth/react";
import { IconPlus, IconAlertCircle } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { showNotification } from "@mantine/notifications";

function AddPaymentsModal() {
  const { data: session, status } = useSession();
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  //
  const [name, setName] = useState("");

  function clearForm() {
    setName("");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name) {
      showNotification({
        title: "Error",
        message: "Name is required! ",
        color: "red",
      });
      return;
    }

    const data = {
      name,
    };

    const JSONdata = JSON.stringify(data);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const endpoint = `${API_URL}/store-room-type`;

    const accessToken = session.user.accessToken;

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    setLoading(true);

    const response = await fetch(endpoint, options);
    const result = await response.json();

    console.log(result);

    if (response.status === 200) {
      showNotification({
        title: "Success",
        message: "Room type created successfully!",
        color: "green",
      });
      clearForm();
      setLoading(false);
      setOpened(false);
      // const params = {};
      // params["accessToken"] = accessToken;
      // store.dispatch(getRoomTypes(params));
    } else {
      showNotification({
        title: "Error",
        message: "Sorry! " + result.message,
        color: "red",
      });
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <>
      <Modal
        opened={opened}
        title="Add Payment"
        onClose={() => setOpened(false)}
        padding="md"
        size="md"
        // overflow="inside"
      >
        {/* Which type of an organization is this? * */}
        <Select
          label="Payment Type"
          placeholder="Select One"
          data={["Option 1", "Option 2", "Option 3", "Option 4"]}
          searchable
        />

        <Select
          label="Transaction Type"
          placeholder="Select One"
          data={["Option 1", "Option 2", "Option 3", "Option 4"]}
          searchable
        />

        <Select
          label="Select Recipient"
          placeholder="Select One"
          data={["Option 1", "Option 2", "Option 3", "Option 4"]}
          searchable
        />

        <TextInput
          placeholder="Recipient Wallet ID"
          label="Recipient Wallet ID"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />

        <TextInput
          placeholder="Amount (KES)"
          label="Amount (KES)"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />

        <TextInput
          placeholder="Memo"
          label="Memo"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />

        <section className="flex justify-end space-y-2 bg-light p-3 rounded-lg my-3">
          <Button onClick={handleSubmit} loading={loading}>
            Save
          </Button>
        </section>
      </Modal>

      <Button
        leftSection={<IconPlus size={16} />}
        onClick={() => setOpened(true)}
        variant="outline"
      >
        New
      </Button>
    </>
  );
}

export default AddPaymentsModal;
