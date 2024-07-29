import { Button } from "@mantine/core";
import Link from "next/link";

export default function LinkButtonV2({
  leftIcon = null,
  rightIcon = null,
  href = "#",
  text = "Link",
  color = "blue",
  variant = "outline",
} = {}) {
  return (
    <Link href={href}>
      <a>
        <Button
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          size="xs"
          color={color}
          variant={variant}
        >
          {text}
        </Button>
      </a>
    </Link>
  );
}
