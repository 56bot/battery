import Image from "./Image";
import Text from "./Text";
import TwoUp from "./TwoUp";
import Video from "./Video";
import Slideshow from "./Slideshow";

export const contentHandler = (item, i) => {
  console.log(item, "ITEM");

  switch (item.acf_fc_layout) {
    case "image_block":
      return <Image key={i} {...item} />;
    case "Image Slideshow":
      return <Slideshow key={i} {...item} />;
    case "text_block":
      return <Text key={i} {...item} />;
    case "two_column_image_block":
      return <TwoUp key={i} {...item} />;
    case "video_block":
      return <Video key={i} {...item} />;
    default:
      return null;
  }
};

const Content = ({ content }) => {
  return (
    <section className="content">
      {content && content.map(contentHandler)}
      <style jsx>{`
        .content {
          min-height: 300px;
        }
      `}</style>
    </section>
  );
};

export default Content;
