import os
import json
from PIL import Image

folder_selected = input("📁 Enter the full path to your image folder: ").strip()

album = input("📖 Enter the album name (used in the path): ").strip()

if not os.path.isdir(folder_selected):
    raise Exception("Invalid folder path.")

supported_formats = (".jpg", ".jpeg", ".png", ".webp", ".gif", ".tiff")

images_data = []

for filename in os.listdir(folder_selected):
    if filename.lower().endswith(supported_formats):
        filepath = os.path.join(folder_selected, filename)
        with Image.open(filepath) as img:
            width, height = img.size
        images_data.append({
            "path": f"/photos/{album}/{filename}",
            "alt": os.path.splitext(filename)[0].replace("_", " ").replace("-", " ").title(),
            "width": width,
            "height": height
        })

output = f"const images = {json.dumps(images_data, indent=2)};"

output_path = os.path.join(folder_selected, "images.js")
with open(output_path, "w") as f:
    f.write(output)

print(f"\n✅ Exported: {output_path}")
