const express = require("express");
const app = express();

// სუათების სია
const brands = ["Nike", "Adidas", "Puma", "Reebok", "Under Armour"];

// მარტივი route სუათების ჩასატვირთად
app.get("/brands", (req, res) => res.json(brands));

// სერვერის გაშვება
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
