import { Button, UseToastOptions, useToast } from "@chakra-ui/react";

export interface ToastProps {
  title: string;
  descriptions: string;
  status: "info" | "warning" | "success" | "error" | "loading";
  duration: number;
}

function Toast(props: ToastProps) {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: props.title,
          description: props.descriptions,
          status: props.status,
          duration: props.duration,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>
  );
}
