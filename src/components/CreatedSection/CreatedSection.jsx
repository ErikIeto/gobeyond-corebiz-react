import { Section } from "../Section/Section";
import { Text } from "../Text/Text";
import { Image } from "../Image/Image";
import vtex from "../../image/vtex.png";
import corebiz from "../../image/corebiz.png";
import "./CreatedSection.css";

export function CreatedSection() {
  return (
    <Section className="created">
      <div className="content">
        <Text text="Created by" className="text"/>
        <Image src={corebiz} alt="Corebiz" className="corebiz"/>
      </div>
      <div className="content">
        <Text text="Powered by" className="text"/>
        <Image src={vtex} alt="VTEX" className="img-vtex" />
      </div>
    </Section>
  );
}
