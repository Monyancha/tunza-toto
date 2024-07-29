import Link from "next/link";
import { Button } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function BackButton({ href }) {
  const router = useRouter();
  const url = useMemo(() => {
    const next_url = router?.query?.next_url ?? "";
    return next_url ? next_url : href;
  }, [router, href]);

  return (
    <Link href={url}>
      <a>
        <Button
          size="xs"
          variant="outline"
          leftIcon={<IconChevronLeft size={16} />}
        >
          Back
        </Button>
      </a>
    </Link>
  );
}
