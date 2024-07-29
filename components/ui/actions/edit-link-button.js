import Link from "next/link";
import { ActionIcon, Button, Tooltip } from "@mantine/core";
import { IconPencil } from "@tabler/icons";

export default function EditLinkButton({
  href = null,
  variant = "outline",
  text = "Edit",
} = {}) {
  return (
    <Link href={href}>
      <div>
        <Tooltip label={text}>
          <ActionIcon size="lg" variant={variant} color="blue">
            <IconPencil size={16} />
          </ActionIcon>
        </Tooltip>
      </div>
    </Link>
  );
}
