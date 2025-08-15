import styled from "styled-components";
import { useState, useEffect } from "react";

const MyImage = ({ imgs }) => {
  const [mainImg, setMainImg] = useState(null);

  useEffect(() => {
    if (Array.isArray(imgs) && imgs.length > 0) {
      setMainImg(imgs[0]);
    }
  }, [imgs]);

  if (!mainImg) return null;

  return (
    <Wrapper>
      <MainDisplay>
        <img src={mainImg.url} alt={mainImg.filename || "main image"} />
      </MainDisplay>

      <ThumbnailGallery>
        {imgs.map((img, index) => (
          <figure key={index}>
            <img
              src={img.url}
              alt={img.filename || `product ${index + 1}`}
              onClick={() => setMainImg(img)}
            />
          </figure>
        ))}
      </ThumbnailGallery>
    </Wrapper>
  );
};

export default MyImage;

// Styled components
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;
`;

const MainDisplay = styled.div`
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 600px) {
    max-width: 90vw;
  }
`;

const ThumbnailGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  figure {
    width: 70px;
    height: 70px;
    border-radius: 8px;
    overflow: hidden;
    margin: 0;
    border: 2px solid transparent;
    transition: transform 0.3s ease, border-color 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
      border-color: #2e8b57;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  @media (max-width: 480px) {
    gap: 0.5rem;

    figure {
      width: 60px;
      height: 60px;
    }
  }
`;
