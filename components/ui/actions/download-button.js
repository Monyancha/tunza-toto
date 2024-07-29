import { Button } from "@mantine/core";
import { IconFileExport } from "@tabler/icons";
import { useSession } from "next-auth/react";
import { useMemo, useState } from "react";
import { downloadFile } from "@/lib/shared/printing-helpers";

export default function DownloadButton({ url, fileName, size, title = "PDF" }) {
  const { data: session } = useSession();
  const accessToken = useMemo(() => {
    return session?.user?.accessToken;
  }, [session]);

  const [isExporting, setIsExporting] = useState(false);

  async function exportFile() {
    setIsExporting(true);

    await downloadFile({
      accessToken,
      url,
      fileName,
    });

    setIsExporting(false);
  }

  return (
    <Button
      size={size ?? 'xs'}
      variant="outline"
      leftIcon={<IconFileExport size={16} />}
      loading={isExporting}
      onClick={exportFile}
    >
      {title}
    </Button>
  );
}
