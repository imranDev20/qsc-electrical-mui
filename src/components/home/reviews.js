import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Stack } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import AvatarIcon from "../../images/icons/avatar.svg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    name: "Justin Timberlake",
    location: "London, GB",
    review:
      "I received a cost and time estimate for installing a ceiling fan in a bedroom with no existing fan and changing the light switch. They were very professional, kept to their cost and time estimate and cleaned up well before leaving. And most love of what we doing with your hard work. I received a cost and time estimate for installing a ceiling fan in a bedroom with no existing fan and changing the light switch. They were very professional, kept to their cost and time estimate and cleaned up well before leaving. And most love of what we doing with your hard work.",
  },
  {
    name: "Justin Timberlake 1",
    location: "London, GB",
    review:
      "I received a cost and time estimate for installing a ceiling fan in a bedroom with no existing fan and changing the light switch. They were very professional, kept to their cost and time estimate and cleaned up well before leaving. And most love of what we doing with your hard work.",
  },
  {
    name: "Justin Timberlake 2",
    location: "London, GB",
    review:
      "I received a cost and time estimate for installing a ceiling fan in a bedroom with no existing fan and changing the light switch. They were very professional, kept to their cost and time estimate and cleaned up well before leaving. And most love of what we doing with your hard work.",
  },
  {
    name: "Justin Timberlake 3",
    location: "London, GB",
    review:
      "I received a cost and time estimate for installing a ceiling fan in a bedroom with no existing fan and changing the light switch. They were very professional, kept to their cost and time estimate and cleaned up well before leaving. And most love of what we doing with your hard work.",
  },
];

const Reviews = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ p: 7 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <Stack direction="row" sx={{ color: "#FFDD44" }}>
                  <StarRoundedIcon />
                  <StarRoundedIcon />
                  <StarRoundedIcon />
                  <StarRoundedIcon />
                  <StarRoundedIcon />
                </Stack>
                <Typography
                  paragraph
                  color="white"
                  sx={{ fontSize: 20 }}
                  mt={3}
                  mb={8}
                >
                  {step.review.length > 300
                    ? step.review.slice(0, 300 - 1) + "..."
                    : step.review}
                </Typography>
                <Stack direction="row" alignItems="center">
                  <Box
                    component="img"
                    sx={{
                      width: "100%",
                      width: 60,
                      height: 60,
                      mr: 3,
                    }}
                    src={AvatarIcon}
                    alt={step.name}
                  />

                  <Box sx={{ color: "white" }}>
                    <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
                      {step.name}
                    </Typography>
                    <Typography>{step.location}</Typography>
                  </Box>
                </Stack>
              </>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
};

export default Reviews;
