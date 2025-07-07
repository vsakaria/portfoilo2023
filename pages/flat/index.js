import { Fragment } from 'react';
import Image from 'next/image';
import styles from './Flat.module.css';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';

const Flat = () => {
  const imageNames = [
   
    'f43a3e42-dc1e-416c-812d-4a1f07dc40c6.jpeg',
    'edd34c54-97f8-42c5-95ab-b5435894a215.jpeg',
    'eda64cb9-dc79-4112-93a1-f14f2a16a934.jpeg',
    'e4377ecc-c449-4ad8-8e20-d4e1cff1d330.jpeg',
    'd6970bdb-1bd5-4c93-b22a-56531faa5923.jpeg',
    'd3661a3f-5729-479c-b041-2645b3a37249.jpeg',
    'ce8abcc9-20c3-496f-8f5c-0aeda452c69a.jpeg',
    'c95cabb6-6282-4b5d-86b1-d64f094a7b8a.jpeg',
    'bdb4ab88-42be-451a-bcc2-8bf073b5fb5c.jpeg',
    'b226153e-56f0-4d5e-8345-b10c7ac10cef.jpeg',
    'b9313e56-b132-4ed2-bd0e-1b6b4c9c9023.jpeg',
    'b1a36bf6-3462-4f33-99df-35dc4cc3f42b.jpeg',
    'abd0531a-921c-4f34-ada7-f31a6a6fe474.jpeg',
    '7793367d-ea40-4328-b7de-b3b07b31814c.jpeg',
    '988337ab-3da9-40f1-9882-fd29e79920ed.jpeg',
    '72445b03-4d7d-47b4-bc87-70ffe5ce1bc7.jpeg',
    '60042c88-7756-4f47-826b-b4cb370d80cf.jpeg',
    '3478aaa3-5d90-49c0-ba56-05ad7b870397.jpeg',
    '689baeed-4cf1-48ca-a701-19e7af1035aa.jpeg',
    '680ff086-a369-42a2-88e0-fc26fd41aba0.jpeg',
    '483eee91-7d6c-4907-a991-b6ff2edac000.jpeg',
    '473ee496-3fbe-4359-b405-d97cc6c151db.jpeg',
    '386eebf8-882c-41f4-aad4-3d81be11ead4.jpeg',
    '215fb0f5-f94a-4879-aebf-9b1c3fa21d60.jpeg',
    '67df40f9-697c-4a52-b3c3-5411950819f7.jpeg',
    '66ba723f-f705-4bdd-ad06-411e7d133e66.jpeg',
    '063d7499-a4e7-4ad7-bd81-3e281d2b7172.jpeg',
    '25d62145-4d1c-4834-a5f6-b70084d2a5c6.jpeg',
    '19e59405-57ee-4cbd-b4a8-45557d2e3f5f.jpeg',
    '7ce69e09-d916-4842-a48f-899351751fea.jpeg',
    '7ca01fd6-fdc5-4340-820f-e62b183cc2d7.jpeg',
    '6b82cbfc-1309-4d6a-b1a6-4efc6ee0f553.jpeg',
    '4d4176d7-68d0-4d1a-b46a-7dea3a441ca8.jpeg',
    '4b49021f-4fe0-4515-b37a-93c8b04acea4.jpeg',
    '4ab54e35-7499-4e61-904a-91c9b72c2de1.jpeg',
    '0b8b0045-9f14-4a3d-a137-fb3c85e498e2.jpeg',
    'IMG_5514.jpeg',
    'IMG_5513.jpeg',
    'IMG_5512.jpeg',
    'IMG_5511.jpeg',
    'IMG_2233.jpeg',
  ];

  const images = imageNames.map(name => `${BASE_URL}/assets/img/flat/${name}`);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className={styles.heading}>Beautiful 2 <br /> bedroom flat <br /> 2 minutes from Willesden Green station</h1>
      <h2 className={styles.subheading}>Call Whatsapp Vishal on 07930 110 405</h2>
      
      <div className={styles.imageGrid}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <Image
              src={image}
              alt={`Flat interior view ${index + 1}`}
              className={styles.image}
              width={800}
              height={600}
              priority={index < 4} // Load first 4 images immediately
            />
            <div className={styles.imageNumber}>{index + 1}</div>
          </div>
        ))}
        <h2 className={styles.subheading}>This is a two-bedroom flat. The second bedroom photos are coming soon. </h2>
      </div>
    </div>
  );
};

export default Flat; 