import Link from "next/link";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons";

export default function CreateLinkButton({
  href = null,
  withIcon = true,
  variant = "outline",
  text = "Create",
} = {}) {
  return (
    <Link href={href}>
      <a>
        {withIcon && (
          <Button size="xs" variant={variant} leftIcon={<IconPlus size={16} />}>
            {text}
          </Button>
        )}

        {!withIcon && (
          <Button size="xs" variant="filled">
            {text}
          </Button>
        )}
      </a>
    </Link>
  );
}
