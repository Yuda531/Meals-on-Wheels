import Swal from "sweetalert2";

export const success = () => {
  Swal.fire({
    title: "Success",
    text: "Regis Successfully Added !",
    icon: "success",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "/home";
    }
  });
};
