// 1_5_1 Extract a component
/* 
  Компонент Gallery содержит очень похожую разметку для двух профилей. Извлеките из него компонент Profile, чтобы уменьшить дублирование кода. Для этого нужно будет определить props для компонента Profile.
*/

import { getImageUrl } from "./util";


function Profile({
  name,
  imageId,
  profession,
  awards,
  discovery,
  imageSize = 70,
}: {
  name: string;
  imageId: string;
  profession: string;
  awards: string[];
  discovery: string;
  imageSize?: number;
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>
          ({awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageId="Maria"
        profession="physicist and chemist"
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
        discovery="polonium (chemical element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imageId="KatsukoSaruhashi"
        profession="geochemist"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
        discovery="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
