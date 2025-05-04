function onUiLoaded() {
  console.log("[ImageGenHook] UI Loaded");
}

function onMessageSent(message) {
  console.log("[ImageGenHook] Message Sent:", message.text);
  sendToComfyUI(message.text);
}

async function sendToComfyUI(promptText) {
  const payload = {
    prompt: promptText,
    lora: "add_detail",
    model: "Realistic_Vision_V5.1"
  };

  try {
    const res = await fetch("https://your-comfyui-url/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    console.log("[ImageGenHook] Image generated:", data);
  } catch (err) {
    console.error("[ImageGenHook] Error generating image:", err);
  }
}

export default {
  onUiLoaded,
  onMessageSent
};
