import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {setSearches} from '../../actions/search'
import './searchForm.css'
function SearchForm() {
  const [carTypes, setcarTypes] = useState([]);
  const [carBrands, setcarBrands] = useState([]);
  const [allYears, setAllYears] = useState([]);
  const colors = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
  ];

  const [carType, setcarType] = useState("");
  const [carBrand, setcarBrand] = useState("");
  const [carColor, setcarColor] = useState("");
  const [carYear, setcarYear] = useState(0);
  const [priceFrom, setpriceFrom] = useState(0);
  const [priceTo, setpriceTo] = useState(0);
  const [model, setModel] = useState("");

  const dispatch = useDispatch();

  const getAllYears = () => {
    const years = [];
    const nowYear = new Date().getFullYear();
    const startYear = 1990;
    for (let i = startYear; i <= nowYear; i++) {
      years.push(i);
    }
    setAllYears(years);
  };

  const getCarTypes = async () => {
    const res = await axios.get("http://localhost:5000/car/cartypes");
    if (res.data.result) {
      setcarTypes(res.data.result);
    }
  };
  const getCarBrands = async () => {
    const res = await axios.get("http://localhost:5000/car/carbrands");
    if (res.data.result) {
      setcarBrands(res.data.result);
    }
  };

  useEffect(() => {
    getCarBrands();
    getCarTypes();
    getAllYears();
  }, []);

  const submitSearch = async () => {
    const data = {
      car_type: carType,
      color: carColor,
      brand_car: carBrand,
      manifactoring_year: carYear,
      day_price_from: priceFrom,
      day_price_to: priceTo,
      model: model,
    };

    const res = await axios.post("http://localhost:5000/car/filter", data);

    console.log(res.data.result);
    dispatch(setSearches(res.data.result));
  };

  return (
<>
<div class="container-fluid bg-white pt-3 px-lg-5">
        <div class="row w-75">
            <div class="col-xl-2 col-lg-4 col-md-6 px-2">
                <select class="custom-select px-4 mb-3" style={{height: "50px"}}>
                    <option selected>choose a type</option>
                    <option value="1">Location 1</option>
                    <option value="2">Location 2</option>
                    <option value="3">Location 3</option>
                </select>
            </div>
            <div class="col-xl-2 col-lg-4 col-md-6 px-2">
                <select class="custom-select px-4 mb-3" style={{height: "50px"}}>
                    <option selected>choose a brand</option>
                    <option value="1">Location 1</option>
                    <option value="2">Location 2</option>
                    <option value="3">Location 3</option>
                </select>
            </div>
            <div class="col-xl-2 col-lg-4 col-md-6 px-2">
                <select class="custom-select px-4 mb-3" style={{height: "50px"}}>
                    <option selected>choose a type</option>
                    <option value="1">Car 1</option>
                    <option value="2">Car 1</option>
                    <option value="3">Car 1</option>
                </select>
            </div>
            <div class="col-xl-2 col-lg-4 col-md-6 px-2">
                <select class="custom-select px-4 mb-3" style={{height: "50px"}}>
                    <option selected>choose a year</option>
                    <option value="1">Car 1</option>
                    <option value="2">Car 1</option>
                    <option value="3">Car 1</option>
                </select>
            </div>
            <div class="col-xl-2 col-lg-4 col-md-6 px-2">
                <div class="date mb-3" id="date" data-target-input="nearest">
                    <input type="text" class="form-control p-4 datetimepicker-input" placeholder="Type model"
                        data-target="#date" data-toggle="datetimepicker" />
                </div>
            </div>
            <div class="col-xl-2 col-lg-4 col-md-6 px-2">
                <div class="date mb-3" id="date" data-target-input="nearest">
                    <input type="text" class="form-control p-4 datetimepicker-input" placeholder="day Price From"
                        data-target="#date" data-toggle="datetimepicker" />
                </div>
            </div>
            <div class="col-xl-2 col-lg-4 col-md-6 px-2">
                <div class="time mb-3" id="time" data-target-input="nearest">
                    <input type="text" class="form-control p-4 datetimepicker-input" placeholder="day Price to"
                        data-target="#time" data-toggle="datetimepicker" />
                </div>
            </div>
            <div class="col-xl-2 col-lg-4 col-md-6 px-2">
                <button class="btn btn-primary btn-block mb-3"  style={{height: "50px"}}>Search</button>
            </div>
        </div>
    </div>
</>
  );
}

export default SearchForm;
/*
<div className="lg">
<form>
  <div className="form-group">
    <select
      id="carTypes"
      className="form-control form-control-lg"
      onChange={(e) => {
        setcarType(e.target.value);
      }}
    >
      <option defaultValue>choose a type</option>
      {carTypes &&
        carTypes.map((type, i) => {
          return (
            <option value={type.car_type} key={i}>
              {type.car_type}
            </option>
          );
        })}
    </select>
  </div>

  <div className="form-group">
    <select
      id="carBrands"
      className="form-control form-control-lg"
      onChange={(e) => setcarBrand(e.target.value)}
    >
      <option defaultValue>choose a brand</option>

      {carBrands &&
        carBrands.map((brand, i) => {
          return (
            <option value={brand.brand} key={i}>
              {brand.brand}
            </option>
          );
        })}
    </select>
  </div>

  <div className="form-group">
    <select
      id="carColors"
      className="form-control form-control-lg"
      onChange={(e) => setcarColor(e.target.value)}
    >
      <option defaultValue>choose a type</option>

      {colors.map((color, i) => {
        return (
          <option value={color} key={i}>
            {color}
          </option>
        );
      })}
    </select>
  </div>

  <div className="form-group">
    <select
      id="carYear"
      className="form-control form-control-lg"
      onChange={(e) => setcarYear(e.target.value)}
    >
      <option defaultValue>choose a year</option>

      {allYears &&
        allYears.map((year, i) => {
          return (
            <option value={year} key={i}>
              {year}
            </option>
          );
        })}
    </select>
  </div>

  <div className="form-group">
    <input
      type="text"
      className="form-control"
      id="model"
      placeholder="BMW"
      onChange={(e) => {
        setModel(e.target.value);
      }}
    />
  </div>

  <div className="form-group">
    <input
      type="text"
      className="form-control"
      id="dayPriceFrom"
      placeholder="15"
      onChange={(e) => {
        setpriceFrom(e.target.value);
      }}
    />
    -
    <input
      type="text"
      className="form-control"
      id="dayPriceTo"
      placeholder="300"
      onChange={(e) => {
        setpriceTo(e.target.value);
      }}
    />
  </div>
</form>

<button className="btn btn-success" type="button" onClick={submitSearch}>
  Search
</button>
</div>
*/