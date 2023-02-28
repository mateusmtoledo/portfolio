function successNotification(text: string, title: string = "Success") {
  const notification = document.createElement("div");
  notification.classList.add(
    "bg-green-100",
    "border-l-4",
    "border-green-500",
    "text-green-700",
    "p-4",
    "w-full"
  );

  const toastTitle = document.createElement("p");
  toastTitle.classList.add("font-bold");
  toastTitle.textContent = title;

  const p = document.createElement("p");
  p.textContent = text;

  notification.append(toastTitle, p);

  return notification;
}

function errorNotification(text: string, title: string = "Error") {
  const notification = document.createElement("div");
  notification.classList.add(
    "bg-red-100",
    "border-l-4",
    "border-red-500",
    "text-red-700",
    "p-4",
    "w-full"
  );

  const toastTitle = document.createElement("p");
  toastTitle.classList.add("font-bold");
  toastTitle.textContent = title;

  const p = document.createElement("p");
  p.textContent = text;

  notification.append(toastTitle, p);

  return notification;
}

function generateNotification(type: string, text: string, title?: string) {
  switch (type) {
    case "success":
      return successNotification(text, title);
    default:
      return errorNotification(text, title);
  }
}

export default function sendNotification(
  type: string,
  text: string,
  title?: string
) {
  const notification = generateNotification(type, text, title);

  const container = document.getElementById("toast");
  if (!container) throw new Error("Toast container not found");

  container.appendChild(notification);
  setTimeout(() => notification.remove(), 5000);
}
