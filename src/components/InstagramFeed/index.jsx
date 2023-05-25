import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../Modal";

const YOUR_ACCESS_TOKEN = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;

export default function InstagramFeed() {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    async function fetchInstagramPhotos() {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=media_url,caption,media_type&access_token=${YOUR_ACCESS_TOKEN}`
        );

        const photosData = response.data.data
          .filter((item) => item.media_type === "IMAGE")
          .slice(0, 4)
          .map((item) => ({
            url: item.media_url,
            caption: item.caption,
          }));

        setPhotos(photosData);
      } catch (error) {
        console.error("Error fetching Instagram photos:", error);
        throw new Error("Failed to fetch Instagram photos");
      }
    }

    fetchInstagramPhotos();
  }, []);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div>
      {photos.map((photo) => (
        <div key={photo.url}>
          <a onClick={() => openModal(photo)}>
            <img src={photo.url} alt={photo.caption} />
          </a>
        </div>
      ))}

      <Modal isOpen={selectedPhoto !== null} onClose={closeModal}>
        {selectedPhoto && (
          <div>
            <img className="instalogo" src="/img/instalogo.png" />
            <img
              className="instapics"
              src={selectedPhoto.url}
              alt={selectedPhoto.caption}
            />
            <p className="instapicsText">{selectedPhoto.caption}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}









