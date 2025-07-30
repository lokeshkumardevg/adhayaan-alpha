import React, { useEffect, useState } from "react";
import "./partner-style.css";
import "./Style.css";
import DatePicker from "react-date-picker";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Loding from "../Loder/Loding";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
// import useData from "rsuite/esm/InputPicker/hooks/useData";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../store/slices/navSlice";
import { hidenav } from "../store/slices/sideNavSlice";
import { dashnavemenushow } from "../store/slices/headerMenuNav";
import { useAuth } from "../ContextApi/auth";
import { useLocation } from "react-router-dom";
import {
  showvaluezindex,
  togglevaluezindexshow,
} from "../store/slices/zindexShow";
const Patnerform = () => {
  const [loginEmail, setLoginEmail] = useState(localStorage.getItem("email"));
  // const [loginEmail] = useAuth();
  const location = useLocation();
  // const d = (location.state = "abcde");
  const zIndexValue = useSelector((state) => state.zindexshow.valueZindexShow);
  const [hide, setHide] = useState(true);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [mobile, setPhone] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGenderValue] = useState();
  const [pinCode, setPinCode] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [occupation, setOccupation] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [socialMedia, setSocialMediaLink] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNo, setAccountNumber] = useState("");
  const [isValidAccountNo, setIsValidAccountNo] = useState(true);
  const [ifscCode, setIfscCode] = useState("");
  const [isValidIfsc, setIsValidIfsc] = useState(true);
  const [accountName, setAccountName] = useState("");
  const [upiCode, setUpiCode] = useState("");
  const [isValidUpi, setIsValidUpi] = useState(true);
  const [cancelledCheque, setCheque] = useState("");
  const [addressProof, setAddressProof] = useState("");
  const [partnerType, setPartnerShip] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [message, setMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [accountMessage, setAccountMessage] = useState(false);
  const [isNumericNameError, setIsNumericNameError] = useState(false);
  const [isNumericFatherError, setIsNumericFatherError] = useState(false);
  const [isNumericError, setIsNumericError] = useState(false);
  const [facebooksocialMedia, setFacebook] = useState("");
  const [faceBokkError, setFaceBookError] = useState(false);
  const [instagramsocialMedia, setInstagram] = useState("");
  const [linkdinsocialMedia, setLinkdin] = useState("");
  const [youtubesocialMedia, setYoutube] = useState("");
  const [nominee_name, setNomineeName] = useState("");
  const [nominee_dob, setNominee_dob] = useState("");
  const [nominee_relation, setNominee_relation] = useState("");
  const [nominee_id, setNominee_id] = useState("");
  const [ifscCodeErrorMessage, setifscCodeErrorMessage] = useState(false);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDistrict, setSearchDistrict] = useState("");
  const [selectedStateShow, setSelectedStateShow] = useState(false);
  const [selectedDistrictShow, setselectedDistrictShow] = useState(false);
  const [nominee_photo, setNominee_Photo] = useState("");
  const [zIndexShow, setZindexShow] = useState(false);
  const [zIndexShow1, setZindexShow1] = useState(false);
  const apiKey = process.env.REACT_APP_API_URL;
  const toggleStateList = () => {
    setSelectedStateShow(!selectedStateShow);
  };
  const toggleDistrictList = () => {
    setselectedDistrictShow(!selectedDistrictShow);
  };
  const handleDistrictSelect = (district) => {
    setDistrict(district);
    setselectedDistrictShow(false);
  };
  const allStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
    "Jammu and Kashmir",
    "Ladakh",
  ];
  const filteredStates = allStates.filter((state) =>
    state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStateSelect = (state) => {
    setState(state);
    setSelectedStateShow(false);
  };
  const fetchDistricts = (state) => {
    switch (state) {
      case "Andhra Pradesh":
        return [
          "Anantapur",
          "Chittoor",
          "East Godavari",
          "Guntur",
          "Krishna",
          "Kurnool",
          "Prakasam",
          "Sri Potti Sriramulu Nellore (Nellore)",
          "Srikakulam",
          "Visakhapatnam (Vizag)",
          "Vizianagaram",
          "West Godavari",
          "YSR Kadapa (Kadapa)",
        ];
      case "Arunachal Pradesh":
        return [
          "Tawang",
          "West Kameng",
          "East Kameng",
          "Papum Pare",
          "Kurung Kumey",
          "Kra Daadi",
          "Lower Subansiri",
          "Upper Subansiri",
          "West Siang",
          "East Siang",
          "Siang",
          "Upper Siang",
          "Lower Siang",
          "Dibang Valley",
          "Lower Dibang Valley",
          "Anjaw",
          "Lohit",
          "Namsai",
          "Changlang",
          "Tirap",
          "Longding",
          "Kamle",
          "Lower Siang",
          "Pakke Kessang",
          "Shi Yomi",
        ];
      case "Assam":
        return [
          "Baksa",
          "Barpeta",
          "Bongaigaon",
          "Cachar",
          "Charaideo",
          "Chirang",
          "Darrang",
          "Dhemaji",
          "Dhubri",
          "Dibrugarh",
          "Dima Hasao (North Cachar Hills)",
          "Goalpara",
          "Golaghat",
          "Hailakandi",
          "Hojai",
          "Jorhat",
          "Kamrup",
          "Kamrup Metropolitan",
          "Karbi Anglong",
          "Karimganj",
          "Kokrajhar",
          "Lakhimpur",
          "Majuli",
          "Morigaon",
          "Nagaon",
          "Nalbari",
          "Sivasagar",
          "Sonitpur",
          "South Salmara-Mankachar",
          "Tinsukia",
          "Udalguri",
          "West Karbi Anglong",
          "Biswanath",
          "Dima Hasao (South Cachar Hills)",
        ];
      case "Bihar":
        return [
          "Araria",
          "Arwal",
          "Aurangabad",
          "Banka",
          "Begusarai",
          "Bhagalpur",
          "Bhojpur",
          "Buxar",
          "Darbhanga",
          "East Champaran (Motihari",
          "Gaya",
          "Gopalganj",
          "Jamui",
          "Jehanabad",
          "Kaimur (Bhabua)",
          "Katihar",
          "Khagaria",
          "Kishanganj",
          "Lakhisarai",
          "Madhepura",
          "Madhubani",
          "Munger (Monghyr)",
          "Muzaffarpur",
          "Nalanda",
          "Nawada",
          "Patna",
          "Purnia (Purnea)	",
          "Rohtas",
          "Saharasa",
          "Samastipur",
          "Saran",
          "Sheikhpura",
          "Sheohar",
          "Sitamarhi",
          "Siwan",
          "Supaul",
          "Vaishali ",
          "West Champaran",
        ];
      case "Chhattisgarh":
        return [
          "Balod",
          "Baloda Bazar",
          "Balrampur",
          "Bastar",
          "Bemetara",
          "Bijapur",
          "Bilaspur",
          "Dantewada (South Bastar)",
          "Dhamtari",
          "Durg",
          "Gariyaband",
          "Janjigir-Champa",
          "Jashpur",
          "Kabirdham (Kawardha)",
          "Kanker (North Bastar)",
          "Kondagaon",
          "Korba",
          "Korea (Koriya)",
          "Mahasamund",
          "Mungeli",
          "Narayanpur",
          "Raigarh",
          "Raipur",
          "Rajnandgaon",
          "Sukma",
          "Surajpur",
          "Surguja",
          "Gaurela-Pendra-Marwahi",
          "Khairagarh-Chhuikhadan-Gandai",
          "Manendragarh-Chirmiri-Bharatpur",
          "Mohla-Manpur-Chowki",
          "Shakti",
          "Sarangarh-Bilaigarh",
        ];
      case "Goa":
        return ["North Goa", "South Goa"];
      case "Gujarat":
        return [
          "Ahmedabad",
          "Amreli",
          "Aravalli",
          "Anand",
          "Banaskantha (Palanpur)",
          "Bharuch",
          "Bhavnagar",
          "Botad",
          "Chhota Udepur",
          "Dahod",
          "Dangs (Ahwa)",
          "Devbhoomi Dwarka",
          "Gandhinagar",
          "Gir Somnath",
          "Jamnagar",
          "Junagadh",
          "Kachchh",
          "Kheda (Nadiad)",
          "Mahisagar",
          "Mehsana",
          "Morbi",
          "Narmada (Rajpipla)",
          "Navsari",
          "Panch Mahals (Godhra)",
          "Patan",
          "Porbandar",
          "Rajkot",
          "Saurashtra",
          "Surat",
          "Sabarkantha (Himmatnagar)",
          "Surendranagar",
          "Tapi (Vyara)",
          "Vadodara",
          "Valsad",
        ];
      case "Haryana":
        return [
          "Ambala",
          "Bhiwani",
          "Charkhura",
          "Charkhi Dadri",
          "Faridabad",
          "Fatehabad",
          "Ghazipur",
          "Gurgaon",
          "Hissar",
          "Jhajjar",
          "Jind",
          "Karnal",
          "Kaithal",
          "Kapurthala",
          "Kurukshetra",
          "Mahendragarh",
          "Nuh",
          "Palwal",
          "Panchkula",
          "Panjpat",
          "Rohini",
          "Rewari",
          "Siri",
          "Sirsa",
          "Sonipat",

          "Yamuna Nagar",
        ];
      case "Himachal Pradesh":
        return [
          "Bilaspur",
          "Baddi",
          "Chamba",
          "Hamirpur",
          "Kangra",
          "Kinnaur",
          "Kullu",
          "Lahaul & Spiti",
          "Mandi",
          "Nagro",
          "Shimla",
          "Sirmaur",
          "Solan",
          "Unna",
        ];
      case "Jharkhand":
        return [
          "Bokaro",
          "Chatra",
          "Deoghar",
          "Dhanbad",
          "Dumka",
          "East Singhbhum",
          "Garhwa",
          "Giridih",
          "Godda",
          "Hazaribag",
          "Jamtara",
          "Khunti",
          "Koderma",
          "Latehar",
          "Lohardaga",
          "Pakur",
          "Palamu",
          "Ranchi",
          "Ramgarh",
          "Spiti",
          "Sahibganj",
          "Seraikela-Kharsawan",
          "Simdega",
          "West Singhbhum",
        ];
      case "Karnataka":
        return [
          "Bagalkot",
          "Bellari (Bellary) ",
          "Belagavi (Begaum)",
          "Bengaluru (Bangalore) Rural",
          "Bengaluru (Bangalore) Urban",
          "Bellamkonda",
          "Bidar",
          "Chamarajanagar",
          "Chikballapur",
          "Chikkamagaluru (Chikmagalur)",
          "Chitradurga",
          "Dakshina Kannada",
          "Davangere",
          "Dharwad",
          "Gadag",
          "Hassan",
          "Haveri",
          "Kodagu",
          "Kolar",
          "Kalaburagi (Gulbaraga)",
          "Koppala",
          "Mandya",
          "Mangalagiri",
          "Mysuru (Mysore)",
          "Raichur",
          "Ramanagara",
          "Shivamogga (Shimoga)",
          "Tumakuru(Tumkur)",
          "Udupi",
          "Uttara Kannada (Uttara-Kannada)",
          "Vijayapura (Bijapur)",
          "Vijaynagar",
          "Vikarabad",
          "Yadgir",
        ];
      case "Kerala":
        return [
          "Alappuzha",
          "Ernakulam",
          "Idukki",
          "Kannur",
          "Kasaragod",
          "Kollam",
          "Kottayam",
          "Kozhikode",
          "Malappuram",
          "Palakkad",
          "Pathanamthitta",
          "Thiruvananthapuram",
          "Thrissur",
          "Wayanad",
        ];
      case "Madhya Pradesh":
        return [
          "Alirajpur",
          "Agar Malwa",
          "Anuppur",
          "Arambagh",
          "Ashoknagar",
          "Balaghat",
          "Barwani",
          "Betul",
          "Bhind",
          "Bhopal",
          "Burhanpur",
          "Chhatarpur",
          "Chhindwara",
          "Dewas",
          "Damoh",
          "Datia",
          "Dindori",
          "Dhar",
          "Guna",
          "Gwalior",
          "Harda",
          "Hoshangabad",
          "Indore",
          "Itarsi",
          "Jabalpur",
          "Jhabua",
          "Katni",
          "Khargone",
          "Khajagpur",
          "Khandwa (East Nimar)",
          "Khandwa (West Nimar)",
          "Khargone (Mandsour)",
          "Kheri",
          "Khowai",
          "Kushinagar",
          "Lahar",
          "Lunawada",
          "Mandsour",
          "Moradabad",
          "Mira Bhayegh",
          "Morena",
          "Nagpur",
          "Narsinghpur",
          "Newara",
          "Neemuch",
          "Panna",
          "Raisen",
          "Rajgarh",
          "Ratlam",
          "Rewa",
          "Sagar",
          "Satna",
          "Sehore",
          "Seoni",
          "Shahdol",
          "Singrauli",
          "Shajapur",
          "Sheopur",
          "Shivpuri",
          "Siddharthnagar",
          "Sior",
          "Sidhi",
          "Singrauli",
          "Tilwara",
          "Tikamgarh",
          "Ujjain",
          "Vidisha",
          "Tikamgarh",
          "Ujjain",
          "Vidisha",
        ];
      case "Manipur":
        return [
          "Bishnupur",
          "Chandel",
          "Chembari",
          "Churachandpur",
          "Imphal East",
          "Imphal West",
          "Jiribam",
          "Kakching",
          "Kamjong",
          "Kangpokpi",
          "Noney",
          "Pantnagar",
          "Pherzawl",
          "Sena",
          "Tambling Model Town",
          "Tamenglong",
          "Thoubal",
          "Ukhrul",
          "Hussain",
          "Senapati",
          "Tamenchu",
          "Tengnoupal",
        ];
      case "Mizoram":
        return [
          "Aizawl",
          "Champhai",
          "Kolasib",
          "Lawngtlai",
          "Mamit",
          "Saiha",
          "Serlui",
          "Hachchhuna",
          "Hnahthial",
          "Tolakha",
          "Champhai",
          "Kolasib",
          "Khawzawl",
          "Lawngtlai",
          "Lunglei",
          "Mamit",
          "Saiha",
          "Serlui",
          "Saitual",
          "Hachchhuna",
          "Tolakha",
        ];
      case "Nagaland":
        return [
          "Dimapur",
          "Kiphire",
          "Kohima",
          "Longleng",
          "Mokokchung",
          "Mon",
          "Phek",
          "Peren",
          "Tuensang",
          "Goalpara",
          "Kiphire",
          "Kohima",
          "Mokokchung",
          "Mon",
          "Phek",
          "Tuensang",
          "Dimapur",
          "Kiphire",
          "Kohima",
          "Mokokchung",
          "Mon",
          "Phek",
          "Tuensang",
          "Wokha",
          "Zunheboto",
          "Noklak",
          "Shamator",
          "Niuland",
          "Chümoukedima",
        ];
      case "Odisha":
        return [
          "Angul",
          "Balangir",
          "Bargarh",
          "Bhadrak",
          "Balasore",
          "Boudh",
          "Cota",
          "Cuttack",
          "Deogarh",
          "Dhenkanal",
          "Gajapati",
          "Ganjam",
          "jagatsinghapur",
          "Jajpur",
          "Jharsuguda",
          "Kalahandi",
          "Kandhamal",
          "Kendrapara",
          "Kendujhar (Keonjhar)",
          "Khordha",
          "Koraput",
          "Malkangiri",
          "Mukherjri",
          "Mayurbhanj",
          "Nabarangpur",
          "Faryngbgakot (Faryngboa)",
          "Kapdwa",
          "Kordos",
          "Kphrey",
          "Mijor",
          "Nayagarh",
          "Nuapada",
          "Puri",
          "Rayagada",
          "Sambalpur",
          "Udipara",
          "Sundargarh",
          "Subarnapur",
        ];
      case "Punjab":
        return [
          "Amritsar",
          "Barnala",
          "Bathinda",
          "Chandigarh",
          "Faridkot",
          "Fatehgarh",
          "Fazilka",
          "Ferozepur",
          "Ghaziaabad",
          "Gobindgarh",
          "Hoshiarpur",
          "Jaito",
          "Jalalpur",
          "Jalandhar",
          "Kapurthala",
          "Ludhiana",
          "Mansa",
          "Mohali",
          "Moga",
          "Mohali",
          "Muktsar",
          "Malerkotla",
          "Moga",
          "Moga",
          "Sangrur",
          "Sahibzada Ajit Singh Nagar (Mohali)",
          "Taran Taran",
          "Patiala",
          "Parhankot",
          "Nawanshahr (Shahid Bhagat Singh Nagar)",
        ];
      case "Rajasthan":
        return [
          "Ajmer",
          "Alwar",
          "Bharatpur",
          "Banswara",
          "Baran",
          "Barmer",
          "Bhilwara",
          "Bikaner",
          "Bundi",
          "Chittorgarh",
          "Churu",
          "Dholpur",
          "Dausa",
          "Dungarpur",
          "Faridabad",
          "Ganganagar",
          "Gurugram",
          "Hiwassehron",
          "Hanumangarh",
          "Jhunjhunu",
          "Jodhpur",
          "Jaipur",
          "Jaisalmer",
          "Jalore",
          "Kota",
          "Karauli",
          "Merta",
          "Nagaur",
          "Pali",
          "Prachnad",
          "Pratapgarh",
          "Rajsamand",
          "Sawai Madhopur",
          "Sirohi",
          "Sri Ganganagar",
          "Sikar",
          "Tonk",
          "Udaipur",
        ];
      case "Sikkim":
        return [
          "Gangtok",
          "Gyalshing",
          "Kadong",
          "Lachung",
          "Mangan",
          "Namchi",
          "Neyyapara",
          "Panchkula",
          "Rajauri",
          "Rambam",
          "Soga",
          "Udhampur",
        ];
      case "Tamil Nadu":
        return [
          "Ariyalur",
          "Vellore",
          "Chennai",
          "Thiruvallur",
          "Madurai",
          "Salem",
          "Coimbatore",
          "Erode",
          "Tirunelveli",
          "Thanjavur",
          "Udaiyur",
          "Dindigul",
          "Kancheepuram",
          "Cuddalore",
          "Hosur",
          "Kumbakonam",
          "Nellimaria",
          "Perambalur",
        ];
      case "Telangana":
        return [
          "Hyderabad",
          "Karimnagar",
          "Khamam",
          "Nizamabad",
          "Sangareddi",
          "Warangal",
          "Jagity",
          "Nalgonda",
          "Suryapet",
        ];
      case "Tripura":
        return [
          "Giridih",
          "Naharlagh",
          "Rohini",
          "South Dum Dum",
          "West Tripura",
        ];
      case "Uttar Pradesh":
        return [
          "Agra",
          "Allahabad",
          "Ambedkar Nagar",
          "Amroha",
          "Auraiya",
          "Ayodhya",
          "Amethi",
          "Azamgarh",
          "Bareilly",
          "Badaun",
          "Bagpat",
          "Bahraich",
          "Ballia",
          "Bhadohi",
          "Betahedi",
          "Budaun",
          "Balrampur",
          "Banda",
          "Barabanki",
          "Bareilly",
          "Basti",
          "Bijnor",
          "Bulandshahr",
          "Chhattisgarh",
          "Chandauli",
          "Chitrakoot",
          "Deoria",
          "Etah",
          "Etawah",
          "Farrukhabad",
          "Fatehpur",
          "Firozabad",
          "Gautam Buddha Nagar",
          "Ghaziabad",
          "Ghazipur",
          "Gonda",
          "Gorakhpur",
          "Hamirpur",
          "Hapur",
          "Hardoi",
          "Hathras",
          "Jalaun",
          "Jaunpur",
          "Jhansi",
          "Kannauj",
          "Kanpur Dehat",
          "Kanpur Nagar",
          "Kasganj",
          "Kaushambi",
          "Kushinagar",
          "Lakhimpur Kheri",
          "Lalitpur",
          "Kanpur",
          "Lucknow",
          "Prayagraj",
          "Varanasi",
          "Maharajganj",
          "Mahoba",
          "Mainpuri",
          "Mathura",
          "Mau",
          "Mirzapur",
          "Moradabad",
          "Muzaffarnagar",
          "Pilibhit",
          "Pratapgarh",
          "Prayagraj",
          "Rae Bareli",
          "Rampur",
          "Saharanpur",
          "Sant Kabir Nagar",
          "Sant Ravidas Nagar",
          "Sambhal",
          "Shahjahanpur",
          "Shamli",
          "Shravasti",
          "Siddharthnagar",
          "Sitapur",
          "Sonbhadra",
          "Sultanpur",
          "Unnao",
          "Varanasi",
        ];
      case "Uttarakhand":
        return [
          "Almora",
          "Banjar",
          "Champawat",
          "Chandigarh",
          "Dehradun",
          "Dwarahat",
          "Haridwar",
          "Himachal Pradesh",
          "Nainital",
          "Panchkula",
        ];
      case "West Bengal":
        return [
          "Kolkata",
          "Durgapur",
          "Howrah",
          "Kharagpur",
          "Kolkata",
          "Siliguri",
        ];
      case "Andaman and Nicobar Islands":
        return ["Port Blair", "Andaman and Nicobar"];
      case "Chandigarh":
        return ["Chandigarh"];
      case "Dadra and Nagar Haveli":
        return ["Dadra and Nagar Haveli"];
      case "Delhi":
        return [
          "Central Delhi",
          "East Delhi",
          "New Delhi",
          "North Delhi",
          "North East Delhi",
          "South Delhi",
          "West Delhi",
          "Shahdara",
          "South East Delhi",
          "South West Delhi",
          "West Delhi",
          "Delhi",
        ];
      default:
        return [];
    }
  };

  const filteredDistricts = (district) => {
    const filteredDistrict = fetchDistricts(district).filter((district) =>
      district.toLowerCase().includes(searchDistrict.toLowerCase())
    );
    return filteredDistrict;
  };

  const handlePartner = () => {
    setPartnerShip("MP");
    setHide(false);
  };
  const handlePartner2 = () => {
    setPartnerShip("SMIP");
    setHide(true);
  };
  const handlePartner3 = () => {
    setPartnerShip("User partner");
    setHide(true);
  };

  // Validation functions
  const isAlphabetic = (value) => /^[a-zA-Z\s]*$/.test(value);
  const isNumeric = (value) => /^\d+$/.test(value);

  const handleChangeFatherName = (e) => {
    const value = e.target.value;
    if (value.length <= 50) {
      setFatherName(value);
      setMessage(false);
      setIsNumericFatherError(false); // Reset numeric error state
    } else {
      setMessage(true);
    }

    // Check if value contains numeric characters
    if (/\d/.test(value)) {
      setIsNumericFatherError(true);
    } else {
      setIsNumericFatherError(false);
    }
  };

  const handleChangeMotherName = (e) => {
    const value = e.target.value;
    if (value.length <= 50) {
      setMotherName(value);
      setMessage(false);
      setIsNumericError(false); // Reset numeric error state
    } else {
      setMessage(true);
    }

    // Check if value contains numeric characters
    if (/\d/.test(value)) {
      setIsNumericError(true);
    } else {
      setIsNumericError(false);
    }
  };

  const handleChangeName = (e) => {
    const value = e.target.value;
    if (value.length <= 50) {
      setName(value);
      setMessage(false);
      setIsNumericNameError(false); // Reset numeric error state
    } else {
      setMessage(true);
    }

    // Check if value contains numeric characters
    if (/\d/.test(value)) {
      setIsNumericNameError(true);
    } else {
      setIsNumericNameError(false);
    }
  };

  const handleChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(value);
    setIsValid(isValidEmail);
    // setMessage(false)
  };

  const validateIfscCode = (value) => {
    // Regular expression for IFSC code validation
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    return ifscRegex.test(value);
  };

  // Handler for IFSC code change
  const handleChangeIfscCode = (e) => {
    const value = e.target.value.toUpperCase(); // Convert to uppercase
    setIfscCode(value);
    setIsValidIfsc(validateIfscCode(value));
  };
  const validateAccountNumber = (accountNumber) => {
    // Example validation logic, customized for 8 to 20 digits numeric only
    const regex = /^[0-9]{8,20}$/; // 8 to 20 digits numeric only
    return regex.test(accountNumber);
  };

  const handleChangeAccountNo = (e) => {
    const inputAccountNumber = e.target.value;
    setAccountNumber(inputAccountNumber);
    setIsValidAccountNo(validateAccountNumber(inputAccountNumber));
    accountNo.length !== 8 && setAccountMessage(false);
  };

  const validateSocialMedia = (value) => {
    const urlRegex = /.+\.com$/;
    return urlRegex.test(value);
  };

  const convertToBase64ForAddressProof = (e) => {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setAddressProof(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error", error);
    };
  };
  const convertToBase64ForCheque = (e) => {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setCheque(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error", error);
    };
  };
  const convertToBase64ForNomineeIdProof = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setNominee_id(reader.result);
    };
  };
  const convertToBase64ForNomineeIdPhoto = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setNominee_Photo(reader.result);
    };
  };

  const handleSubmit = async () => {
    // Simple form validation, you can add more complex validation logic here
    if (
      !partnerType ||
      !name ||
      !fatherName ||
      !motherName ||
      !dob ||
      !email ||
      !mobile ||
      !nationality ||
      !state ||
      !district ||
      !pinCode ||
      !occupation ||
      !gender ||
      !workExperience ||
      !upiCode ||
      !ifscCode ||
      !bankName ||
      !accountName ||
      !accountNo
    ) {
      setIsFormValid(true);
      return;
    }

    // Validate fields
    if (
      !isAlphabetic(name) ||
      !isAlphabetic(fatherName) ||
      !isAlphabetic(motherName) ||
      !isAlphabetic(accountName) ||
      !isAlphabetic(bankName) ||
      !isAlphabetic(nationality)
    ) {
      alert(
        "Name, father's name, accountName and mother's name should contain only alphabetic characters."
      );
      return;
    }
    if (!isNumeric(mobile) || !isNumeric(pinCode)) {
      alert("Mobile number should contain only numeric characters.");
      setErrorMessage(true);
      return;
    } else {
      setErrorMessage(false);
    }
    if (!isValid) {
      toast.error("Please enter a valid email address.");
      setMessage(true);
      return;
    } else {
      setMessage(false);
    }

    // Validate IFSC code before submission
    if (!isValidIfsc) {
      // toast.error("Please enter a valid IFSC code.");
      setifscCodeErrorMessage(true);
      return;
    }
    if (!isValidAccountNo) {
      // toast.error("Please enter a valid ACCOUNT NUMBER code.");
      setAccountMessage(true);
      return;
    }

    // if (partnerType === "SMIP") {
    if (partnerType) {
      if (!validateSocialMedia(linkdinsocialMedia)) {
        setFaceBookError(true);
        toast.error("Please enter a valid LinkedIn URL.");
        return;
      }
      if (!validateSocialMedia(facebooksocialMedia)) {
        toast.error("Please enter a valid Facebook URL.");
        return;
      }
      if (!validateSocialMedia(instagramsocialMedia)) {
        toast.error("Please enter a valid Instagram URL.");
        return;
      }
      if (!validateSocialMedia(youtubesocialMedia)) {
        toast.error("Please enter a valid Youtube URL.");
        return;
      }
      if (!facebooksocialMedia) {
        setFaceBookError(true);
      }
    }

    setLoader(true);

    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("dob", dob);
      productData.append("fatherName", fatherName);
      productData.append("motherName", motherName);
      productData.append("email", email);
      productData.append("mobile", mobile);
      productData.append("nationality", nationality);
      productData.append("pinCode", pinCode);
      productData.append("state", state);
      productData.append("district", district);
      productData.append("pincode", pinCode);
      productData.append("addressProof", addressProof);

      productData.append("cancelledCheque", cancelledCheque);
      productData.append("partnerType", partnerType);
      productData.append("bankName", bankName);
      productData.append("accountNo", accountNo);
      productData.append("ifscCode", ifscCode);
      productData.append("accountName", accountName);
      productData.append("upiCode", upiCode);
      productData.append("socialMedia", socialMedia);
      productData.append("workExperience", workExperience);
      productData.append("occupation", occupation);
      productData.append("gender", gender);
      productData.append("linkdinsocialMedia", linkdinsocialMedia);
      productData.append("instagramsocialMedia", instagramsocialMedia);
      productData.append("facebooksocialMedia", facebooksocialMedia);
      productData.append("youtubesocialMedia", youtubesocialMedia);
      productData.append("address", address);
      productData.append("nominee_name", nominee_name);
      productData.append("nominee_relation", nominee_relation);
      productData.append("nominee_dob", nominee_dob);
      productData.append("nominee_id", nominee_id);
      productData.append("nominee_photo", nominee_photo);
      // Send form data to the API endpoint using Axios
      const response = await axios.post(
        // "https://aadhyayan.aboqindia.com/admin/index.php/Api/add_member/",
        `${apiKey}admin/index.php/Api/add_member/`,
        productData
      );

      // Handle response if needed
      console.log("Response:", response.data);

      // Navigate to success page upon successful submission
      navigate("/successfully");
      // alert("sfd");
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoader(false);
    }
  };
  const dispatch = useDispatch();
  const handlemenu2 = () => {
    dispatch(decrement());
    dispatch(hidenav());
    dispatch(dashnavemenushow());
    // dispatch(showvaluezindex())
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loader ? (
        <Loding />
      ) : (
        <Layout>
          {console.log("inside login ====>", loginEmail, location, zIndexValue)}
          <div className="partner-form-container-s" onClick={handlemenu2}>
            <div className="inner-partner-form-conatainer-s">
              <div className="width-i-p-f-c-s">
                <h3>Application Form For Partnership Code</h3>
                <p>
                  The application process includes work history and financial
                  information to determine eligibility for the partnership.
                </p>
                <p>Type of partnership* : </p>
                <input
                  type="radio"
                  name="partnerType"
                  value="Managing Partnership (MP)"
                  onClick={() => handlePartner()}
                />{" "}
                Managing Partnership (MP){" "}
                <input
                  type="radio"
                  name="partnerType"
                  value=" Social Media Influencer Partnership (SMIP)"
                  onClick={() => handlePartner2()}
                />{" "}
                Social Media Influencer Partnership (SMIP)
                {loginEmail && (
                  <>
                    <input
                      type="radio"
                      name="partnerType"
                      value=" Social Media Influencer Partnership (SMIP)"
                      onClick={() => handlePartner3()}
                    />{" "}
                    User partner
                    {isFormValid && !partnerType && (
                      <p
                        className="error-message"
                        style={{ marginTop: "10px" }}
                      >
                        Please select partnership type*
                      </p>
                    )}
                  </>
                )}
                <p className={hide && "p-hide"}>
                  Managing Partner Fees ₹1,50,000 Lakhs
                </p>
                {/* <p>Managing Partner (MP) Code :</p> */}
                {console.log(partnerType)}
                {console.log(addressProof)}
              </div>
            </div>
          </div>

          <div className="partner-form-container-2-s" onClick={handlemenu2}>
            <div className="inner-partner-form-c-2">
              <div className="width-i-p-f-c-s-2">
                <div className="left-p-f-c">
                  <div className="div-f">
                    <input
                      type="text"
                      name="applicantName"
                      // onChange={(e) => setName(e.target.value)}
                      onChange={handleChangeName}
                      style={{ zIndex: "1" }}
                      value={name}
                    />
                    <div
                      className={
                        name.length === 0 ? "labelline" : "labelline fix"
                      }
                    >
                      Name of Applicant*
                    </div>
                  </div>
                  {isFormValid && !name && (
                    <p className="error-message">Please fill out this field*</p>
                  )}
                  {message && name.length === 50 && (
                    <p className="error-message">
                      Maximum character limit for name exceeded. Please limit
                      input to 50 characters.
                    </p>
                  )}
                  {isNumericNameError && (
                    <p className="error-message">
                      Name should not contain numeric characters
                    </p>
                  )}
                  <div className="div-f">
                    <input
                      type="text"
                      name="fatherName"
                      // onChange={(e) => setFatherName(e.target.value)}
                      onChange={handleChangeFatherName}
                      style={{ zIndex: "1" }}
                      value={fatherName}
                    />
                    <div
                      className={
                        fatherName.length === 0 ? "labelline" : "labelline fix"
                      }
                    >
                      Father Name*
                    </div>
                  </div>
                  {isFormValid && !fatherName && (
                    <p className="error-message">Please fill out this field*</p>
                  )}
                  {message && fatherName.length === 50 && (
                    <p className="error-message">
                      Maximum character limit for father name exceeded. Please
                      limit input to 50 characters.
                    </p>
                  )}
                  {isNumericFatherError && (
                    <p className="error-message">
                      fatherName should not contain numeric characters
                    </p>
                  )}
                  <div className="div-f">
                    <input
                      type="text"
                      // onChange={(e) => setMotherName(e.target.value)}
                      onChange={handleChangeMotherName}
                      style={{ zIndex: "1" }}
                      value={motherName}
                      name="motherName"
                    />
                    <div
                      className={
                        motherName.length === 0 ? "labelline" : "labelline fix"
                      }
                    >
                      Mohter Name*
                    </div>
                  </div>
                  {isFormValid && !motherName && (
                    <p className="error-message">Please fill out this field*</p>
                  )}
                  {message && motherName.length === 50 && (
                    <p className="error-message">
                      Maximum character limit for mother name exceeded. Please
                      limit input to 50 characters.
                    </p>
                  )}
                  {isNumericError && (
                    <p className="error-message">
                      motherName should not contain numeric characters
                    </p>
                  )}
                  <div className="div-fff" style={{ zIndex: "1" }}>
                    <div
                      className={
                        dob.length === 0
                          ? "labelline fix fixxx"
                          : "labelline fix fixxx"
                      }
                      style={{
                        background: "#f7e5e5",
                        color: "#630000",
                        marginTop: "-10px",
                        zIndex: zIndexValue ? "220001" : "0",
                      }}
                    >
                      Date of Birth*
                    </div>

                    <DatePicker
                      className={"date-pick-2"}
                      onChange={setDob}
                      value={dob}
                      onClick={() => dispatch(togglevaluezindexshow())}
                    />
                    {console.log("date is", dob)}
                  </div>
                  {isFormValid && !dob && (
                    <p className="error-message">Please fill out this field*</p>
                  )}

                  <div className="div-f">
                    <input
                      type="text"
                      onChange={handleChangeEmail}
                      style={{ zIndex: "1" }}
                      value={email}
                    />
                    <div
                      className={
                        email.length === 0 ? "labelline" : "labelline fix"
                      }
                    >
                      Email ID*
                    </div>
                  </div>
                  {isFormValid && !email && (
                    <p className="error-message">Please fill out this field*</p>
                  )}
                  {message && email && (
                    <p className="error-message">
                      Please enter a valid email address.
                    </p>
                  )}
                  <div className="div-f">
                    <input
                      type="text"
                      onChange={(e) => setPhone(e.target.value)}
                      style={{ zIndex: "1" }}
                      value={mobile}
                      name="mobile"
                    />
                    <div
                      className={
                        mobile.length === 0 ? "labelline" : "labelline fix"
                      }
                    >
                      Phone No*
                    </div>
                  </div>
                  {isFormValid && !mobile && (
                    <p className="error-message">Please fill out this field*</p>
                  )}
                  {mobile.length !== 10 && mobile.length > 0 && (
                    <p className="error-message">
                      Please enter a valid phone number.
                    </p>
                  )}
                  {errorMessage && mobile && (
                    <p className="error-message">
                      Mobile number should contain only numeric characters.
                    </p>
                  )}
                  <div className="div-f">
                    <input
                      type="text"
                      onChange={(e) => setNationality(e.target.value)}
                      style={{ zIndex: "1" }}
                      value={nationality}
                    />
                    <div
                      className={
                        nationality.length === 0 ? "labelline" : "labelline fix"
                      }
                    >
                      Nationality*
                    </div>
                  </div>
                  {isFormValid && !nationality && (
                    <p className="error-message">Please fill out this field*</p>
                  )}
                  <div className="div-g">
                    <p>Gender* :</p>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      onClick={() => setGenderValue("Male")}
                    />{" "}
                    Male{" "}
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      onClick={() => setGenderValue("Female")}
                    />{" "}
                    Female
                    <input
                      type="radio"
                      name="gender"
                      value=" 3rd Gender"
                      onClick={() => setGenderValue("3rd Gender")}
                    />{" "}
                    3rd Gender
                  </div>
                  {isFormValid && !gender && (
                    <p className="error-message">Please fill out this field*</p>
                  )}
                  {partnerType && (
                    <>
                      <div className="div-f">
                        <input
                          type="text"
                          onChange={(e) => setFacebook(e.target.value)}
                          style={{ zIndex: "1" }}
                          value={facebooksocialMedia}
                          name="socialMedia"
                        />
                        <div
                          className={
                            facebooksocialMedia.length === 0
                              ? "labelline"
                              : "labelline fix"
                          }
                        >
                          Facebook social Media*
                        </div>
                      </div>
                      {faceBokkError && (
                        <p className="error-message">
                          Please fill out this field*
                        </p>
                      )}
                    </>
                  )}
                  {partnerType && (
                    <div className="div-f">
                      <input
                        type="text"
                        onChange={(e) => setInstagram(e.target.value)}
                        style={{ zIndex: "1" }}
                        value={instagramsocialMedia}
                        name="socialMedia"
                      />
                      <div
                        className={
                          instagramsocialMedia.length === 0
                            ? "labelline"
                            : "labelline fix"
                        }
                      >
                        Instagram social Media*
                      </div>
                    </div>
                  )}
                </div>

                <div className="right-p-f-c">
                  <div className="div-f">
                    <input
                      type="text"
                      onChange={(e) => setAddress(e.target.value)}
                      style={{ zIndex: "1" }}
                      // value={address}
                      name="address"
                    />
                    <div
                      className={
                        address.length === 0 ? "labelline" : "labelline fix"
                      }
                    >
                      Address*
                    </div>
                  </div>
                  {isFormValid && !address && (
                    <p className="error-message">Please fill out this field*</p>
                  )}
                  <div className="div-g">
                    <p className="w-i-p-0002" >
                      {" "}
                      Address Proof*
                      <span >
                        (Aadhar Card / VoterID Card / Passport/ ) Any One
                      </span>
                    </p>
                    <input
                      type="file"
                      name="addressProof"
                      id=""
                      accept=".jpg,.jpeg,.pdf,.webp"
                      onChange={convertToBase64ForAddressProof}
                      style={{ border: "none", width: "170px" }}
                    />
                    {console.log(addressProof.name)}
                  </div>
                  {isFormValid && !addressProof && (
                    <p className="error-message">Please choose file*</p>
                  )}
                  <div className="div-f">
                    <input
                      type="text"
                      onChange={(e) => setState(e.target.value)}
                      style={{ zIndex: "1" }}
                      value={state}
                      name="state"
                      onClick={toggleStateList}
                    />
                    <div
                      className={
                        state.length === 0 ? "labelline" : "labelline fix"
                      }
                    >
                      State*
                    </div>
                  </div>
                  <div
                    className={
                      selectedStateShow
                        ? "search-bar-div search-bar-div-2 s-b-2"
                        : "hide-list"
                    }
                  >
                    <div className="s-icon">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="s-input-div">
                      <input
                        type="text"
                        placeholder="Search...."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        // onClick={handleSearch}
                      />
                    </div>
                  </div>
                  <div
                    className={
                      selectedStateShow ? "show-list-55 show-555" : "hide-list"
                    }
                  >
                    {filteredStates.map((state, index) => (
                      <p
                        key={index}
                        style={{ cursor: "pointer", marginTop: "-14px" }}
                        onClick={() => handleStateSelect(state)}
                      >
                        {state}
                      </p>
                    ))}
                  </div>
                  {isFormValid && !state && (
                    <p className="error-message">Please fill out this field*</p>
                  )}
                  <div className="div-f">
                    <input
                      type="text"
                      onChange={(e) => setDistrict(e.target.value)}
                      style={{ zIndex: "1" }}
                      value={district}
                      name="district"
                      onClick={toggleDistrictList}
                    />
                    <div
                      className={
                        district.length === 0 ? "labelline" : "labelline fix"
                      }
                    >
                      District*
                    </div>
                  </div>
                  <div
                    className={
                      selectedDistrictShow
                        ? "search-bar-div search-bar-div-2 s-b-2"
                        : "hide-list"
                    }
                  >
                    <div className="s-icon">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="s-input-div">
                      <input
                        type="text"
                        placeholder="Search...."
                        value={searchDistrict}
                        onChange={(e) => setSearchDistrict(e.target.value)}
                        // onClick={handleSearch}
                      />
                    </div>
                  </div>

                  <div
                    className={
                      selectedDistrictShow
                        ? "show-list-55 show-556"
                        : "hide-list"
                    }
                  >
                    {/* Render district options based on selected state */}

                    {filteredDistricts(state).map((districtOption, index) => (
                      <p
                        key={index}
                        style={{ cursor: "pointer", marginTop: "-14px" }}
                        // onClick={() => setSelectedDistrict(districtOption)}
                        onClick={() => handleDistrictSelect(districtOption)}
                      >
                        {districtOption}
                      </p>
                    ))}
                  </div>

                  {isFormValid && !district && (
                    <p className="error-message">Please fill out this field*</p>
                  )}
                  <div className="div-f">
                    <input
                      type="text"
                      onChange={(e) => setPinCode(e.target.value)}
                      style={{ zIndex: "1" }}
                      value={pinCode}
                      name="pincode"
                    />
                    <div
                      className={
                        pinCode.length === 0 ? "labelline" : "labelline fix"
                      }
                    >
                      Pin Code*
                    </div>
                  </div>
                  {isFormValid && !pinCode && (
                    <p className="error-message">Please fill out this field*</p>
                  )}
                  {errorMessage && pinCode.length === "" && (
                    <p className="error-message">
                      Pincode should be in number*
                    </p>
                  )}

                  <div className="div-f">
                    <input
                      type="text"
                      onChange={(e) => setOccupation(e.target.value)}
                      value={occupation}
                      style={{ zIndex: "1" }}
                      name="occupation"
                    />
                    <div
                      className={
                        occupation.length === 0 ? "labelline" : "labelline fix"
                      }
                    >
                      Occupation*
                    </div>
                  </div>
                  {isFormValid && !occupation && (
                    <p className="error-message">Please fill out this field*</p>
                  )}

                  <div className="div-f">
                    <input
                      type="text"
                      onChange={(e) => setWorkExperience(e.target.value)}
                      style={{ zIndex: "1" }}
                      value={workExperience}
                      name="workExperience"
                    />
                    <div
                      className={
                        workExperience.length === 0
                          ? "labelline"
                          : "labelline fix"
                      }
                    >
                      Work Experience*
                    </div>
                  </div>
                  {isFormValid && !workExperience && (
                    <p className="error-message">Please fill out this field*</p>
                  )}

                  {partnerType && (
                    <div className="div-f">
                      <input
                        type="text"
                        onChange={(e) => setYoutube(e.target.value)}
                        style={{ zIndex: "1" }}
                        value={youtubesocialMedia}
                        name="socialMedia"
                      />
                      <div
                        className={
                          youtubesocialMedia.length === 0
                            ? "labelline"
                            : "labelline fix"
                        }
                      >
                        Youtube social Media*
                      </div>
                    </div>
                  )}
                  {partnerType && (
                    <div className="div-f">
                      <input
                        type="text"
                        onChange={(e) => setLinkdin(e.target.value)}
                        style={{ zIndex: "1" }}
                        value={linkdinsocialMedia}
                        name="socialMedia"
                      />
                      <div
                        className={
                          linkdinsocialMedia.length === 0
                            ? "labelline"
                            : "labelline fix"
                        }
                      >
                        linkdin social Media*
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="partner-form-container-3-s" onClick={handlemenu2}>
            <div className="inner-p-f-c-3-s">
              <div className="w-i-p-f-c-3-s">
                <p>
                  To facilitate the transfer of your commission, we kindly
                  request you to share your bank details
                </p>
                <h3>Bank Details*</h3>
              </div>
            </div>
          </div>

          <div className="p-f-c-4-s" onClick={handlemenu2}>
            <div className="i-p-f-c-4-s">
              <div className="w-i-p-f-c-4-s">
                <div className="left-p-f-c">
                  <div className="div-f">
                    <input
                      type="text"
                      onChange={(e) => setBankName(e.target.value)}
                      style={{ zIndex: "1" }}
                      value={bankName}
                      name="bankName"
                    />
                    <div
                      className={
                        bankName.length === 0 ? "labelline" : "labelline fix"
                      }
                    >
                      Bank Name*
                    </div>
                  </div>
                  {isFormValid && !bankName && (
                    <p className="error-message">Please fill out this field*</p>
                  )}
                  <div className="div-f">
                    <input
                      type="text"
                      onChange={(e) => setAccountName(e.target.value)}
                      style={{ zIndex: "1" }}
                      value={accountName}
                      name="accountName"
                    />
                    <div
                      className={
                        accountName.length === 0 ? "labelline" : "labelline fix"
                      }
                    >
                      Account Name*
                    </div>
                  </div>
                  {isFormValid && !accountName && (
                    <p className="error-message">Please fill out this field*</p>
                  )}
                  <div className="div-f">
                    <input
                      type="text"
                      // onChange={(e) => setAccountNumber(e.target.value)}
                      onChange={handleChangeAccountNo}
                      style={{ zIndex: "1" }}
                      value={accountNo}
                      name="accountNo"
                    />
                    <div
                      className={
                        accountNo.length === 0 ? "labelline" : "labelline fix"
                      }
                    >
                      Account No*
                    </div>
                  </div>
                  {isFormValid && !accountNo && (
                    <p className="error-message">Please fill out this field*</p>
                  )}
                  {accountMessage && (
                    <p className="error-message">
                      Please enter a valid ACCOUNT NUMBER code
                    </p>
                  )}
                </div>

                <div className="right-p-f-c">
                  <div className="div-g">
                    <p>Upload Cancelled Cheque</p>
                    <input
                      type="file"
                      name="cancelledCheque"
                      id=""
                      style={{ border: "none", width: "170px" }}
                      onChange={convertToBase64ForCheque}
                    />
                    {console.log(cancelledCheque)}
                  </div>
                  {isFormValid && !cancelledCheque && (
                    <p className="error-message">Please choose file*</p>
                  )}
                  <div className="div-f">
                    <input
                      type="text"
                      // onChange={(e) => setIfscCode(e.target.value)}
                      onChange={handleChangeIfscCode}
                      style={{ zIndex: "1" }}
                      value={ifscCode}
                      name="ifscCode"
                    />
                    <div
                      className={
                        ifscCode.length === 0 ? "labelline" : "labelline fix"
                      }
                    >
                      IFSC Code*
                    </div>
                  </div>
                  {isFormValid && !ifscCode && (
                    <p className="error-message">Please fill out this field*</p>
                  )}
                  {ifscCodeErrorMessage && (
                    <p className="error-message">
                      Please enter a valid IFCS code
                    </p>
                  )}
                  <div className="div-f">
                    <input
                      type="text"
                      onChange={(e) => setUpiCode(e.target.value)}
                      // onChange={handleChangeUpiCode}
                      style={{ zIndex: "1" }}
                      value={upiCode}
                      name="upiCode"
                    />
                    <div
                      className={
                        upiCode.length === 0 ? "labelline" : "labelline fix"
                      }
                    >
                      UPI Code*
                    </div>
                  </div>
                  {isFormValid && !upiCode && (
                    <p className="error-message">Please fill out this field*</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="partner-form-container-3-s-s-3" onClick={handlemenu2}>
            <div className="inner-p-f-c-3-s">
              <div className="w-i-p-f-c-3-s">
                <h3>Nominee Details*</h3>
              </div>
            </div>
          </div>
          <div className="p-f-c-4-s" onClick={handlemenu2}>
            <div className="i-p-f-c-4-s">
              <div className="w-i-p-f-c-4-s">
                <div className="left-p-f-c">
                  <div className="div-f">
                    <input
                      type="text"
                      onChange={(e) => setNomineeName(e.target.value)}
                      style={{ zIndex: "1" }}
                      value={nominee_name}
                      name="nominee_name"
                    />
                    <div
                      className={
                        nominee_name.length === 0
                          ? "labelline"
                          : "labelline fix"
                      }
                    >
                      Nominee Name*
                    </div>
                  </div>
                  {isFormValid && !nominee_name && (
                    <p className="error-message">Please fill out this field*</p>
                  )}
                  

                  <div className="div-fff" style={{ zIndex: "1" }}>
                    <div
                      className="labelline fix fixxx"
                      // className={            
                      //   zIndexShow
                      //     ? "labelline fix fixxx zindex"
                      //     : "labelline fix fixxx"
                      // }
                      style={{
                        // zIndex: "4",
                        background: "#f7e5e5",
                        color: "#630000",
                        marginTop: "-10px",
                        zIndex: zIndexValue ? "220001" : "0",
                      }}
                    >
                      Nominee Dob*
                    </div>

                    <DatePicker
                      className={"date-pick-2"}
                      onChange={setNominee_dob}
                      value={nominee_dob}
                      onClick={() => dispatch(togglevaluezindexshow())}
                    />
                  </div>
                  {isFormValid && !nominee_dob && (
                    <p className="error-message">Please fill out this field*</p>
                  )}
                  <div className="div-g">
                    <p>Nominee Photo</p>
                    <input
                      type="file"
                      name="nominee_id"
                      id=""
                      style={{ border: "none", width: "250px" }}
                      onChange={convertToBase64ForNomineeIdPhoto}
                    />
                    {console.log(nominee_photo, "asfa=====>")}
                  </div>
                  {isFormValid && !nominee_photo && (
                    <p className="error-message">Please choose file*</p>
                  )}
                </div>

                <div className="right-p-f-c">
                  <div className="div-g">
                    <p>ID Proof</p>
                    <input
                      type="file"
                      name="nominee_id"
                      id=""
                      style={{ border: "none", width: "250px" }}
                      onChange={convertToBase64ForNomineeIdProof}
                    />
                    {console.log(cancelledCheque)}
                  </div>
                  {isFormValid && !nominee_id && (
                    <p className="error-message">Please choose file*</p>
                  )}
                  <div className="div-f">
                    <input
                      type="text"
                      // onChange={(e) => setAccountNumber(e.target.value)}
                      onChange={(e) => setNominee_relation(e.target.value)}
                      style={{ zIndex: "1" }}
                      value={nominee_relation}
                      name="nominee_relation"
                    />
                    <div
                      className={
                        nominee_relation.length === 0
                          ? "labelline"
                          : "labelline fix"
                      }
                    >
                      Nominee Relation*
                    </div>
                  </div>
                  {isFormValid && !nominee_relation && (
                    <p className="error-message">Please fill out this field*</p>
                  )}
                  {accountMessage && (
                    <p className="error-message">
                      Please enter a valid ACCOUNT NUMBER code
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* {console.log(
          `partnershipType ==> ${partnerType}, name of applicant ===>${name},father name ===>${fatherName},mother name===>${motherName},dob ===>${dob},email id ==>${email},phone no===>${mobile},nationalty ===>${nationality},gender ==>${gender},address==>${address},address proof==>${addressProof},state ===>${state},district===>${district},pincode ===>${pinCode},occupation===>${occupation},working experience===>${workExperience},bank name ===>${bankName},accunt name==>${accountName},account no===>${accountNo},cheque ==>${cancelledCheque},iifcs==>${ifscCode},upi code ==> ${upiCode}`
        )} */}
          <div
            className="submit-d-container"
            style={{ background: "#f7e5e5" }}
            onClick={handlemenu2}
          >
            <div className="inner-s-d-c" style={{ background: "#f7e5e5" }}>
              {/* <button onClick={() => navigate("/successfully")}>Submit</button> */}
              <button
                onClick={handleSubmit}
                style={{ background: "#630000", color: "#fff" }}
              >
                Submit
              </button>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default Patnerform;
