import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/dark.css";

const datePicker = document.querySelector('#date-picker') as HTMLInputElement

flatpickr(datePicker, {
      defaultDate: new Date(),
});
