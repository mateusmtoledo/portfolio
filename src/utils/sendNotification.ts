function successNotification(text: string) {
  const notification = document.createElement("div");
  notification.classList.add(
    "bg-green-100",
    "border-l-4",
    "border-green-500",
    "text-green-700",
    "p-4"
  );

  const title = document.createElement("p");
  title.classList.add("font-bold");
  title.textContent = "Success";

  const p = document.createElement("p");
  p.textContent = text;

  notification.append(title, p);

  return notification;
}

function errorNotification(text: string) {
  const notification = document.createElement("div");
  notification.classList.add(
    "bg-red-100",
    "border-l-4",
    "border-red-500",
    "text-red-700",
    "p-4"
  );

  const title = document.createElement("p");
  title.classList.add("font-bold");
  title.textContent = "Error";

  const p = document.createElement("p");
  p.textContent = text;

  notification.append(title, p);

  return notification;
}

function generateNotification(type: string, text: string) {
  switch (type) {
    case "success":
      return successNotification(text);
    default:
      return errorNotification(text);
  }
}

export default function sendNotification(type: string, text: string) {
  const notification = generateNotification(type, text);

  const container = document.getElementById("toast");
  if (!container) throw new Error("Toast container not found");

  container.appendChild(notification);
  setTimeout(() => notification.remove(), 5000);
}
