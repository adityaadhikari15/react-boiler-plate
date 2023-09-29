import ReactDOM from "react-dom/client";
import React, { RefObject, useRef } from "react";
import { Toast } from "primereact/toast";

interface ToastMessageProps {
  title: string;
  message: string;
}

class Toastr extends React.Component {
  toast?: RefObject<Toast>;

  constructor(props?) {
    super(props);
    if (typeof window !== "undefined") {
      const toastAppRoot = document.createElement("div");
      document.body.append(toastAppRoot);

      const ToastApp = () => {
        this.toast = useRef<Toast>(null);
        return <Toast ref={this.toast} position="bottom-center" />;
      };

      ReactDOM.createRoot(toastAppRoot).render(<ToastApp />);
    }
  }

  success(message, title = "") {
    this.toast!.current!.show({
      severity: "success",
      summary: title,
      detail: message,
    });
  }

  error(message, title = "") {
    this.toast!.current!.show({
      severity: "error",
      summary: title,
      detail: message,
    });
  }

  info(props: ToastMessageProps) {
    this.toast!.current!.show({
      severity: "info",
      summary: props.title,
      detail: props.message,
    });
  }
}

export const ToastrService = new Toastr();
