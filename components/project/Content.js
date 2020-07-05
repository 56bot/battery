import Image from "./Image";
import Text from "./Text";
import TwoUp from "./TwoUp";
import Video from "./Video";

export const contentHandler = (item, i) => {
  switch (item.acf_fc_layout) {
    case "image_block":
      return <Image key={i} {...item} />;
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
  if (!content || content.length <= 0) return null;
  return <section className="content">{content.map(contentHandler)}</section>;
};

export default Content;
