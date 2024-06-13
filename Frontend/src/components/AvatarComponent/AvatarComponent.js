import React, { useState } from 'react';
import seedrandom from 'seedrandom';
import { Container, Typography, FormControl, InputLabel, Select, MenuItem, Box, Button, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './AvatarComponent.css';

const AvatarGenerator = () => {
  const topTypeOptions = [
    "NoHair", "Eyepatch", "Hat", "Hijab", "Turban", "WinterHat1", "WinterHat2",
    "WinterHat3", "WinterHat4", "LongHairBigHair", "LongHairBob", "LongHairBun",
    "LongHairCurly", "LongHairCurvy", "LongHairDreads", "LongHairFrida",
    "LongHairFro", "LongHairFroBand", "LongHairNotTooLong", "LongHairShavedSides",
    "LongHairMiaWallace", "LongHairStraight", "LongHairStraight2", "LongHairStraightStrand",
    "ShortHairDreads01", "ShortHairDreads02", "ShortHairFrizzle", "ShortHairShaggyMullet",
    "ShortHairShortCurly", "ShortHairShortFlat", "ShortHairShortRound", "ShortHairShortWaved",
    "ShortHairSides", "ShortHairTheCaesar", "ShortHairTheCaesarSidePart"
  ];

  const accessoriesTypeOptions = [
    "Blank", "Kurt", "Prescription01", "Prescription02", "Round", "Sunglasses", "Wayfarers"
  ];

  const facialHairTypeOptions = [
    "Blank", "BeardMedium", "BeardLight", "BeardMagestic", "MoustacheFancy", "MoustacheMagnum"
  ];

  const facialHairColorOptions = [
    "Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark", "Platinum", "Red"
  ];

  const clotheTypeOptions = [
    "BlazerShirt", "BlazerSweater", "CollarSweater", "GraphicShirt", "Hoodie", "Overall",
    "ShirtCrewNeck", "ShirtScoopNeck", "ShirtVNeck"
  ];

  const eyeTypeOptions = [
    "Close", "Cry", "Default", "Dizzy", "EyeRoll", "Happy", "Hearts", "Side",
    "Squint", "Surprised", "Wink", "WinkWacky"
  ];

  const eyebrowTypeOptions = [
    "Angry", "AngryNatural", "Default", "DefaultNatural", "FlatNatural", "RaisedExcited",
    "RaisedExcitedNatural", "SadConcerned", "SadConcernedNatural", "UnibrowNatural", "UpDown",
    "UpDownNatural"
  ];

  const mouthTypeOptions = [
    "Concerned", "Default", "Disbelief", "Eating", "Grimace", "Sad", "ScreamOpen",
    "Serious", "Smile", "Tongue", "Twinkle", "Vomit"
  ];

  const skinColorOptions = [
    "Tanned", "Yellow", "Pale", "Light", "Brown", "DarkBrown", "Black"
  ];

  const hairColorOptions = [
    "Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark",
    "PastelPink", "Platinum", "Red", "SilverGray"
  ];

  const hatColorOptions = [
    "Black", "Blue01", "Blue02", "Blue03", "Gray01", "Gray02", "Heather",
    "PastelBlue", "PastelGreen", "PastelOrange", "PastelRed", "PastelYellow",
    "Pink", "Red", "White"
  ];

  const clotheColorOptions = [
    "Black", "Blue01", "Blue02", "Blue03", "Gray01", "Gray02", "Heather",
    "PastelBlue", "PastelGreen", "PastelOrange", "PastelRed", "PastelYellow",
    "Pink", "Red", "White"
  ];

  const [avatarOptions, setAvatarOptions] = useState({
    topType: topTypeOptions[0],
    accessoriesType: accessoriesTypeOptions[0],
    facialHairType: facialHairTypeOptions[0],
    facialHairColor: facialHairColorOptions[0],
    clotheType: clotheTypeOptions[0],
    eyeType: eyeTypeOptions[0],
    eyebrowType: eyebrowTypeOptions[0],
    mouthType: mouthTypeOptions[0],
    skinColor: skinColorOptions[0],
    hairColor: hairColorOptions[0],
    hatColor: hatColorOptions[0],
    clotheColor: clotheColorOptions[0]
  });

  const handleOptionChange = (e) => {
    setAvatarOptions({
      ...avatarOptions,
      [e.target.name]: e.target.value
    });
  };

  const generateAvatarUrl = () => {
    const {
      topType, accessoriesType, facialHairType, facialHairColor, clotheType,
      eyeType, eyebrowType, mouthType, skinColor, hairColor, hatColor, clotheColor
    } = avatarOptions;

    return `https://avataaars.io/?accessoriesType=${accessoriesType}&avatarStyle=Circle&clotheColor=${clotheColor}&clotheType=${clotheType}&eyeType=${eyeType}&eyebrowType=${eyebrowType}&facialHairColor=${facialHairColor}&facialHairType=${facialHairType}&hairColor=${hairColor}&hatColor=${hatColor}&mouthType=${mouthType}&skinColor=${skinColor}&topType=${topType}`;


  };

  //console log the url
  
  const generatedProfilepicAvatar =  generateAvatarUrl();
  console.log(generatedProfilepicAvatar);



  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
    },
    components: {
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: 'white',
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          icon: {
            color: 'white',
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: '#1976d2',
              color: 'white',
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className="App">
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            Avatar Generator
          </Typography>
          <Box component="form" sx={{ mt: 4 }}>
            {Object.keys(avatarOptions).map((key) => (
              <FormControl fullWidth sx={{ mb: 2 }} key={key}>
                <InputLabel>{key.replace(/([A-Z])/g, ' $1').trim()}</InputLabel>
                <Select
                  name={key}
                  value={avatarOptions[key]}
                  onChange={handleOptionChange}
                  sx={{
                    color: 'white',
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                  }}
                >
                  {eval(key + 'Options').map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ))}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <img src={generateAvatarUrl()} alt="Generated Avatar" style={{ borderRadius: '50%', border: '2px solid #000' }} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button variant="contained" color="primary" onClick={() => setAvatarOptions({ ...avatarOptions })}>
              Regenerate Avatar
            </Button>
          </Box>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default AvatarGenerator;
