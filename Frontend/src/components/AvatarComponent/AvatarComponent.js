
import React, { useState } from 'react';
import './AvatarComponent.css';

const AvatarGenerator = ({ onSubmit }) => {
  const options = {
    topType: ["ShortHairShortFlat", "Eyepatch", "Hat", "Hijab", "Turban", "WinterHat1", "WinterHat2", "WinterHat3", "WinterHat4", "LongHairBigHair", "LongHairBob", "LongHairBun", "LongHairCurly", "LongHairCurvy", "LongHairDreads", "LongHairFrida", "LongHairFro", "LongHairFroBand", "LongHairNotTooLong", "LongHairShavedSides", "LongHairMiaWallace", "LongHairStraight", "LongHairStraight2", "LongHairStraightStrand", "ShortHairDreads01", "ShortHairDreads02", "ShortHairFrizzle", "ShortHairShaggyMullet", "ShortHairShortCurly", "NoHair", "ShortHairShortRound", "ShortHairShortWaved", "ShortHairSides", "ShortHairTheCaesar", "ShortHairTheCaesarSidePart"],
    accessoriesType: ["Blank", "Kurt", "Prescription01", "Prescription02", "Round", "Sunglasses", "Wayfarers"],
    facialHairType: ["Blank", "BeardMedium", "BeardLight", "BeardMagestic", "MoustacheFancy", "MoustacheMagnum"],
    facialHairColor: ["Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark", "Platinum", "Red"],
    clotheType: ["Hoodie", "BlazerSweater", "CollarSweater", "GraphicShirt", "BlazerShirt", "Overall", "ShirtCrewNeck", "ShirtScoopNeck", "ShirtVNeck"],
    eyeType: ["Wink", "Cry", "Default", "Dizzy", "EyeRoll", "Happy", "Hearts", "Side", "Squint", "Surprised", "Close", "WinkWacky"],
    eyebrowType: ["DefaultNatural", "AngryNatural", "Default", "Angry", "FlatNatural", "RaisedExcited", "RaisedExcitedNatural", "SadConcerned", "SadConcernedNatural", "UnibrowNatural", "UpDown", "UpDownNatural"],
    mouthType: ["Smile", "Default", "Disbelief", "Eating", "Grimace", "Sad", "ScreamOpen", "Serious", "Concerned ", "Tongue", "Twinkle", "Vomit"],
    skinColor: ["Tanned", "Yellow", "Pale", "Light", "Brown", "DarkBrown", "Black"],
    hairColor: ["Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark", "PastelPink", "Platinum", "Red", "SilverGray"],
    hatColor: ["Black", "Blue01", "Blue02", "Blue03", "Gray01", "Gray02", "Heather", "PastelBlue", "PastelGreen", "PastelOrange", "PastelRed", "PastelYellow", "Pink", "Red", "White"],
    clotheColor: ["Black", "Blue01", "Blue02", "Blue03", "Gray01", "Gray02", "Heather", "PastelBlue", "PastelGreen", "PastelOrange", "PastelRed", "PastelYellow", "Pink", "Red", "White"]
  };

  const [avatarOptions, setAvatarOptions] = useState({
    topType: options.topType[0],
    accessoriesType: options.accessoriesType[0],
    facialHairType: options.facialHairType[0],
    facialHairColor: options.facialHairColor[0],
    clotheType: options.clotheType[0],
    eyeType: options.eyeType[0],
    eyebrowType: options.eyebrowType[0],
    mouthType: options.mouthType[0],
    skinColor: options.skinColor[0],
    hairColor: options.hairColor[0],
    hatColor: options.hatColor[0],
    clotheColor: options.clotheColor[0]
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

    return `https://avataaars.io/?avatarStyle=Circle&topType=${topType}&accessoriesType=${accessoriesType}&hairColor=${hairColor}&facialHairType=${facialHairType}&facialHairColor=${facialHairColor}&clotheType=${clotheType}&clotheColor=${clotheColor}&eyeType=${eyeType}&eyebrowType=${eyebrowType}&mouthType=${mouthType}&skinColor=${skinColor}&hatColor=${hatColor}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const avatarUrl = generateAvatarUrl();
    onSubmit(avatarUrl);
  };

  return (
    <div className="avatar-generator">
      <h1>Generate Your Avatar</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Top Type:
          <select name="topType" value={avatarOptions.topType} onChange={handleOptionChange}>
            {options.topType.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
        <label>
          Accessories Type:
          <select name="accessoriesType" value={avatarOptions.accessoriesType} onChange={handleOptionChange}>
            {options.accessoriesType.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
//
        <label>
          Facial Hair Type:
          <select name="facialHairType" value={avatarOptions.facialHairType} onChange={handleOptionChange}>
            {options.facialHairType.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label>
          Facial HairColor Type:
          <select name="facialHairColor" value={avatarOptions.facialHairColor} onChange={handleOptionChange}>
            {options.facialHairColor.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label>
          Cloth Type:
          <select name="clotheType" value={avatarOptions.clotheType} onChange={handleOptionChange}>
            {options.clotheType.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label>
          Eye Type:
          <select name="eyeType" value={avatarOptions.eyeType} onChange={handleOptionChange}>
            {options.eyeType.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label>
          Eyebrow Type:
          <select name="eyebrowType" value={avatarOptions.eyebrowType} onChange={handleOptionChange}>
            {options.eyebrowType.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label>
          Mouth Type:
          <select name="mouthType" value={avatarOptions.mouthType} onChange={handleOptionChange}>
            {options.mouthType.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label>
          Skin Color Type:
          <select name="skinColor" value={avatarOptions.skinColor} onChange={handleOptionChange}>
            {options.skinColor.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label>
          Hair Color Type:
          <select name="hairColor" value={avatarOptions.hairColor} onChange={handleOptionChange}>
            {options.hairColor.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label>
          Hat Color Type:
          <select name="hatColor" value={avatarOptions.hatColor} onChange={handleOptionChange}>
            {options.hatColor.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label>
          Dress Color Type:
          <select name="clotheColor" value={avatarOptions.clotheColor} onChange={handleOptionChange}>
            {options.clotheColor.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <div className="avatar-preview">
          <img src={generateAvatarUrl()} alt="Generated Avatar" />
        </div>
        <button type="submit">Submit</button>
      </form>
      
    </div>
    
  );
};

export default AvatarGenerator;
