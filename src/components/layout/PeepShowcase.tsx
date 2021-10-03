import { Select, Box, Input } from "@chakra-ui/react";
import { useState } from "react";
import Peep, { FacialHairType } from "react-peeps";

const styles = {
  peepStyle: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignSelf: "center",
  },
  circleStyle: {
    backgroundColor: "#F3D34A",
    width: 270,
    height: 270,
    alignSelf: "center",
    borderRadius: 135,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black",
    borderStyle: "solid",
  },
  showcaseWrapper: {
    display: "flex",
    justifyContent: "center",
    height: "-webkit-fill-available",
  },
};

const PeepShowcase: React.FC = () => {
  const [strokeColor, setStrokeColor] = useState("#e6e6e6");
  const [backgroundColor, setbackgroundColor] = useState("red");
  const [facialHair, setFacialHair] = useState("None");
  const facialHairList: FacialHairType[] = [
    "Chin",
    "Full",
    "FullMajestic",
    "FullMedium",
    "Goatee",
    "GoateeCircle",
    "Dali",
    "Handlebars",
    "Imperial",
    "Painters",
    "PaintersFilled",
    "Swashbuckler",
    "MoustacheThin",
    "Yosemite",
    "GrayFull",
    "MajesticHandlebars",
  ];

  const handleChangeFacialHair = (event: {
    target: HTMLSelectElement;
  }): void => {
    // console.log(event.target.value);
    setFacialHair(event.target.value);
  };

  return (
    <Box>
      <Input
        type="color"
        value={strokeColor}
        onChange={(event: { target: HTMLInputElement }) =>
          setStrokeColor(event.target.value)
        }
      />
      <Input
        type="color"
        value={backgroundColor}
        onChange={(event: { target: HTMLInputElement }) =>
          setbackgroundColor(event.target.value)
        }
      />
      <Select
        value={facialHair}
        placeholder="Select facialHair"
        onChange={handleChangeFacialHair}
      >
        {facialHairList.map((fh) => (
          <option value={fh}>{fh}</option>
        ))}
        {/* <option value="Yosemite">Yosemite</option> */}
        {/* <option value="Swashbuckler">Swashbuckler</option>
    <option value="Goatee">Goatee</option>
    <option value="None">None</option> */}
      </Select>
      <div style={styles.showcaseWrapper}>
        <Peep
          style={styles.peepStyle}
          accessory="GlassRoundThick"
          body="Shirt"
          face="Cute"
          hair="ShortVolumed"
          facialHair={facialHair as FacialHairType}
          strokeColor={strokeColor}
          backgroundColor={backgroundColor}
        />

        {/* <Peep
        style={styles.peepStyle}
        circleStyle={styles.circleStyle}
        accessory="GlassRoundThick"
        body="Shirt"
        face="Cute"
        hair="ShortVolumed"
        facialHair="Dali"
        strokeColor="#e6e6e6"
        viewBox={{ x: "0", y: "0", width: "1050", height: "1200" }}
      />

      <Peep
        style={{ ...styles.peepStyle, transform: "scale(-1, 1)" }}
        accessory="GlassRoundThick"
        body="Shirt"
        face="Cute"
        hair="ShortVolumed"
        facialHair="Dali"
        strokeColor={{
          degree: 300,
          firstColor: "#2E8A57",
          secondColor: "#81087F",
        }}
      /> */}
      </div>
    </Box>
  );
};

export default PeepShowcase;
