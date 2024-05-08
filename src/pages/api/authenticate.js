import axios from "axios";

export default async function handler(req, res) {
  const { username } = req.body;
  try {
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      { username, secret, first_name: firstName },
      { headers: { "private-key": process.env.PRIVATE_KEY } }
    );

    if (response.status >= 200 && response.status < 300) {
      return res.status(response.status).json(response.data);
    } else {
      console.error("Respon tidak terduga:", response.status, response.data);
      return res
        .status(500)
        .json({ message: "Kesalahan memperbarui pengguna" });
    }
  } catch (error) {
    console.error("Kesalahan:", error);
    // Tangani error spesifik jika diperlukan
    return res.status(500).json({ message: "Kesalahan memperbarui pengguna" });
  }
}
