import React, { useEffect, useState } from "react";
import "./Profileedit.css";
import Layout from "../Layout/Layout";
import { useAuth } from "../ContextApi/auth";
import axios from "axios";
import Dashboardheader from "../DashiboardHeader/Dashboardheader";
import { useDispatch } from "react-redux";
import { navmenudashboard } from "../store/slices/dashboardNav";
import { useNavigate } from "react-router-dom";
import { decrement } from "../store/slices/navSlice";
import { hidenav } from "../store/slices/sideNavSlice";
import { dashnavemenushow } from "../store/slices/headerMenuNav";
import DatePicker from "react-date-picker";
const ProfileEdit = () => {
  // const [emaill,setEmail]=useState('')
  const dispatch = useDispatch();
  const { email } = useAuth();
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [fatherName, setFatherName] = useState(
    localStorage.getItem("fatherName") || ""
  );
  const [collegename, setcollegeName] = useState(
    localStorage.getItem("collageName") || ""
  );
  const [universityname, setUniversityName] = useState(
    localStorage.getItem("universityName") || ""
  );
  const [student_enrolment_no, setstudent_enrolment_no] = useState(
    localStorage.getItem("enrolmentNo") || ""
  );
  const [gender, setGender] = useState(localStorage.getItem("gender") || "");
  const [address, setAddress] = useState(localStorage.getItem("address") || "");
  const [mobile, setPhone] = useState(localStorage.getItem("contactNo") || "");
  // const [dob, setDob] = useState("");
  // const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [usedcode, setUsedcode] = useState("");
  const [state, setState] = useState("");
  const [user_id, setUserId] = useState(localStorage.getItem("userId"));
  const [adharcard, setAdharCard] = useState("ajksbdf");
  // const [selectedMode, setselectedMode] = useState("");
  const [selectedStateShow, setSelectedStateShow] = useState(false);
  const [selectedDistrictShow, setselectedDistrictShow] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDistrict, setSearchDistrict] = useState("");
  const [profileImage, setProfilePhoto] = useState("");
  const [youtubesocialMedia, setYoutube] = useState("");
  const [instagramsocialMedia, setInstagram] = useState("");
  const [facebooksocialMedia, setFacebook] = useState("");
  const [linkdinsocialMedia, setLinkdin] = useState("");
  const [nominee_dob, setNominee_dob] = useState("");
  const apiKey = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const toggleStateList = () => {
    setSelectedStateShow(!selectedStateShow);
  };
  const toggleDistrictList = () => {
    setselectedDistrictShow(!selectedDistrictShow);
  };

  const handleStateSelect = (state) => {
    setSelectedState(state);
    setSelectedStateShow(false);
  };
  const handleDistrictSelect = (district) => {
    setSelectedDistrict(district);
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
  const convertToBase64ForProfilePhoto = (e) => {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setProfilePhoto(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error", error);
    };
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        // "	https://aadhyayan.aboqindia.com/admin/index.php/Api/smsupdate/",
        `${apiKey}admin/index.php/Api/smsupdate/`,
        {
          name,
          fatherName,
          mobile,
          user_id,
          usedcode,
          address,
          adharcard,
          gender,
          // district,
          // state,
          district: selectedDistrict,
          state: selectedState,
          student_enrolment_no,
          collegename,
          universityname,
          email,
          pincode,
          profileImage,
        }
      );
      if (res.data) {
        alert("Data updated");
        localStorage.setItem("name", name);
        localStorage.setItem("fatherName", fatherName);
        localStorage.setItem("collageName", collegename);
        localStorage.setItem("universityName", universityname);
        localStorage.setItem("enrolmentNo", student_enrolment_no);
        localStorage.setItem("address", address);
        localStorage.setItem("contactNo", mobile);
        localStorage.setItem("fatherName", fatherName);
        localStorage.setItem("collageName", collegename);
        localStorage.setItem("universityName", universityname);
        localStorage.setItem("enrolmentNo", student_enrolment_no);
        localStorage.setItem("gender", gender);
        localStorage.setItem("profile_image", profileImage);
        navigate("/dashboard/user");
        console.log(res.data);
        console.log(res);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error gracefully, show error message to user or retry submission
    }
  };
  const handlemenu2 = () => {
    dispatch(decrement());
    dispatch(hidenav());
    dispatch(dashnavemenushow());
  };
  useEffect(() => {
    dispatch(navmenudashboard());
  });

  return (
    // <Layout>
    <>
      <Dashboardheader />
      <div className="pofile-container" onClick={handlemenu2}>
        <div className="inner-pro-conatiern">
          <div className="width-pro-container">
            <div className="left-pro-container">
              <div className="email-container">
                <div className="edit-conatien">
                  {console.log(
                    email,
                    name,
                    fatherName,
                    mobile,
                    gender,
                    usedcode,
                    pincode,
                    state,
                    // district,
                    selectedDistrict,
                    collegename,
                    universityname,
                    student_enrolment_no,
                    user_id
                  )}
                  {console.log("disfs", selectedDistrict)}
                  {/* <h3>Email Address</h3> */}
                  {/* <p>Edit</p> */}
                </div>
                <div className="div-f f-d f-d-1 f-d-2">
                  <input
                    type="text"
                    //   onChange={(e)=>setEmail(e.target.value)}
                    style={{ zIndex: "1" }}
                    value={email}
                    //   readOnly
                    // onClick={toggleCourseList}
                  />
                  <div
                    className={
                      email.length === 0 ? "labelline" : "labelline fix"
                    }
                  >
                    Email
                  </div>
                </div>
              </div>
              <div className="email-container">
                <div className="edit-conatien">
                  {/* <h3>Name</h3> */}
                  {/* <p>Edit</p> */}
                </div>
                <div className="div-f f-d f-d-1 f-d-2">
                  <input
                    type="text"
                    //   onChange={(e)=>setEmail(e.target.value)}
                    style={{ zIndex: "1" }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    // value={email}
                    //   readOnly
                    // onClick={toggleCourseList}
                  />
                  <div
                    className={
                      name.length === 0 ? "labelline" : "labelline fix"
                    }
                  >
                    Name
                  </div>
                </div>
              </div>
              <div className="email-container">
                <div className="edit-conatien">
                  {/* <h3>father Name</h3> */}
                  {/* <p>Edit</p> */}
                </div>
                <div className="div-f f-d f-d-1 f-d-2">
                  <input
                    type="text"
                    value={fatherName}
                    onChange={(e) => setFatherName(e.target.value)}
                    //   onChange={(e)=>setEmail(e.target.value)}
                    style={{ zIndex: "1" }}
                    // value={email}
                    //   readOnly
                    // onClick={toggleCourseList}
                  />
                  <div
                    className={
                      fatherName.length === 0 ? "labelline" : "labelline fix"
                    }
                  >
                    Father Name
                  </div>
                </div>
              </div>

              <div className="email-container">
                <div className="edit-conatien">
                  {/* <h3>Address</h3> */}
                  {/* <p>Edit</p> */}
                </div>
                <div className="div-ss">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onClick={() => setGender("male")}
                  />{" "}
                  <label htmlFor="Male">Male</label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onClick={() => setGender("female")}
                  />{" "}
                  <label htmlFor="Female">Female</label>
                  <input
                    type="radio"
                    name="gender"
                    value="3rd gender"
                    onClick={() => setGender("Other")}
                  />{" "}
                  <label htmlFor="Other">Other</label>
                </div>
              </div>
              <div className="email-container">
                <div className="edit-conatien">
                  {/* <h3>Used Code</h3> */}
                  {/* <p>Edit</p> */}
                </div>
                <div className="div-f f-d f-d-1 f-d-2">
                  <input
                    type="text"
                    value={usedcode}
                    onChange={(e) => setUsedcode(e.target.value)}
                    //   onChange={(e)=>setEmail(e.target.value)}
                    style={{ zIndex: "1" }}
                    // value={email}
                    //   readOnly
                    // onClick={toggleCourseList}
                  />
                  <div
                    className={
                      usedcode.length === 0 ? "labelline" : "labelline fix"
                    }
                  >
                    Used Code
                  </div>
                </div>
              </div>
              <div className="email-container">
                <div className="div-f f-d f-d-1 f-d-2">
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    style={{ zIndex: "1" }}
                  />
                  <div
                    className={
                      pincode.length === 0 ? "labelline" : "labelline fix"
                    }
                  >
                    Pin Code
                  </div>
                </div>
              </div>
              <div className="email-container">
                <div className="inner-e-container">
                  <p>Profile Photo</p>
                  <input
                    type="file"
                    name="profilephoto"
                    id=""
                    onChange={convertToBase64ForProfilePhoto}
                  />
                </div>
              </div>
              {/* ===============================================> */}
              <div className="email-container" style={{ marginTop: "20px" }}>
                <div className="div-f f-d f-d-1 f-d-2">
                  <input
                    type="text"
                    value={facebooksocialMedia}
                    onChange={(e) => setFacebook(e.target.value)}
                    //   onChange={(e)=>setEmail(e.target.value)}
                    style={{ zIndex: "1" }}
                    // value={email}
                    // readOnly
                    // onClick={toggleCourseList}
                  />
                  <div
                    className={
                      facebooksocialMedia.length === 0
                        ? "labelline"
                        : "labelline fix"
                    }
                  >
                    Facbook Social Media
                  </div>
                </div>
              </div>
              <div className="email-container">
                <div className="edit-conatien">
                  {/* <h3>Phone</h3> */}
                  {/* <p>Edit</p> */}
                </div>
                <div className="div-f f-d f-d-1 f-d-2">
                  <input
                    type="text"
                    value={instagramsocialMedia}
                    onChange={(e) => setInstagram(e.target.value)}
                    //   onChange={(e)=>setEmail(e.target.value)}
                    style={{ zIndex: "1" }}
                    // value={email}
                    //   readOnly
                    // onClick={toggleCourseList}
                  />
                  <div
                    className={
                      instagramsocialMedia.length === 0
                        ? "labelline"
                        : "labelline fix"
                    }
                  >
                    Instagram Social Media
                  </div>
                </div>
              </div>
              <div className="email-container">
                <div className="edit-conatien">
                  {/* <h3>Phone</h3> */}
                  {/* <p>Edit</p> */}
                </div>
                <div className="div-f f-d f-d-1 f-d-2">
                  <input
                    type="text"
                    value={linkdinsocialMedia}
                    onChange={(e) => setLinkdin(e.target.value)}
                    //   onChange={(e)=>setEmail(e.target.value)}
                    style={{ zIndex: "1" }}
                    // value={email}
                    //   readOnly
                    // onClick={toggleCourseList}
                  />
                  <div
                    className={
                      linkdinsocialMedia.length === 0
                        ? "labelline"
                        : "labelline fix"
                    }
                  >
                    Bank Name
                  </div>
                </div>
              </div>
              <div className="email-container">
                <div className="edit-conatien">
                  {/* <h3>Phone</h3> */}
                  {/* <p>Edit</p> */}
                </div>
                <div className="div-f f-d f-d-1 f-d-2">
                  <input
                    type="text"
                    value={linkdinsocialMedia}
                    onChange={(e) => setLinkdin(e.target.value)}
                    //   onChange={(e)=>setEmail(e.target.value)}
                    style={{ zIndex: "1" }}
                    // value={email}
                    //   readOnly
                    // onClick={toggleCourseList}
                  />
                  <div
                    className={
                      linkdinsocialMedia.length === 0
                        ? "labelline"
                        : "labelline fix"
                    }
                  >
                    Account Name
                  </div>
                </div>
              </div>
              <div className="email-container">
                <div className="edit-conatien">
                  {/* <h3>Phone</h3> */}
                  {/* <p>Edit</p> */}
                </div>
                <div className="div-f f-d f-d-1 f-d-2">
                  <input
                    type="text"
                    value={linkdinsocialMedia}
                    onChange={(e) => setLinkdin(e.target.value)}
                    style={{ zIndex: "1" }}
                  />
                  <div
                    className={
                      linkdinsocialMedia.length === 0
                        ? "labelline"
                        : "labelline fix"
                    }
                  >
                    IFCS Code
                  </div>
                </div>
              </div>
              <div className="div-fff fddd" style={{ zIndex: "1" }}>
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
                    // zIndex: zIndexValue ? "220001" : "0",
                  }}
                >
                  Nominee Dob*
                </div>

                <DatePicker
                  className={"date-pick-2 dp-2"}
                  onChange={setNominee_dob}
                  value={nominee_dob}
                  // onClick={() => dispatch(togglevaluezindexshow())}
                />
              </div>
              <div className="email-container">
                <div className="inner-e-container">
                  <p style={{ fontSize: "12px" }}>Upload Cancelled Cheque</p>
                  <input
                    type="file"
                    name="profilephoto"
                    id=""
                    onChange={convertToBase64ForProfilePhoto}
                  />
                </div>
              </div>
              {/* ===============================================> */}
            </div>

            <div className="right-pro-container">
              <div className="email-container">
                <div className="edit-conatien">
                  {/* <h3>College Name</h3> */}
                  {/* <p>Edit</p> */}
                </div>
                <div className="div-f f-d f-d-1 f-d-2">
                  <input
                    type="text"
                    //   onChange={(e)=>setEmail(e.target.value)}
                    value={collegename}
                    onChange={(e) => setcollegeName(e.target.value)}
                    style={{ zIndex: "1" }}
                    // value={email}
                    //   readOnly
                    // onClick={toggleCourseList}
                  />
                  <div
                    className={
                      collegename.length === 0 ? "labelline" : "labelline fix"
                    }
                  >
                    College Name
                  </div>
                </div>
              </div>
              <div className="email-container">
                <div className="edit-conatien">
                  {/* <h3>University Name</h3> */}
                  {/* <p>Edit</p> */}
                </div>
                <div className="div-f f-d f-d-1 f-d-2">
                  <input
                    type="text"
                    value={universityname}
                    onChange={(e) => setUniversityName(e.target.value)}
                    //   onChange={(e)=>setEmail(e.target.value)}
                    style={{ zIndex: "1" }}
                    // value={email}
                    //   readOnly
                    // onClick={toggleCourseList}
                  />
                  <div
                    className={
                      universityname.length === 0
                        ? "labelline"
                        : "labelline fix"
                    }
                  >
                    University Name
                  </div>
                </div>
              </div>
              <div className="email-container">
                <div className="edit-conatien">
                  {/* <h3>Student Enrolment No</h3> */}
                  {/* <p>Edit</p> */}
                </div>
                <div className="div-f f-d f-d-1 f-d-2">
                  <input
                    type="text"
                    value={student_enrolment_no}
                    onChange={(e) => setstudent_enrolment_no(e.target.value)}
                    //   onChange={(e)=>setEmail(e.target.value)}
                    style={{ zIndex: "1" }}
                    // value={email}
                    //   readOnly
                    // onClick={toggleCourseList}
                  />
                  <div
                    className={
                      student_enrolment_no.length === 0
                        ? "labelline"
                        : "labelline fix"
                    }
                  >
                    Student Enrolment No
                  </div>
                </div>
              </div>

              <div className="email-container">
                <div className="div-f f-d fd-d">
                  <input
                    type="text"
                    style={{ zIndex: "1" }}
                    value={selectedState}
                    onClick={toggleStateList}
                    // readOnly
                  />
                  <div
                    className={
                      selectedState.length === 0 ? "labelline" : "labelline fix"
                    }
                  >
                    State
                  </div>
                  {selectedStateShow ? (
                    <i
                      className="fa-solid fa-chevron-up"
                      style={{ fontSize: "16px" }}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-chevron-down"
                      style={{ fontSize: "16px" }}
                    ></i>
                  )}
                </div>
                <div
                  className={
                    selectedStateShow
                      ? "search-bar-div search-bar-div-2"
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
              </div>
              <div className="email-container">
                <div className="div-f f-d fd-d">
                  <input
                    type="text"
                    style={{ zIndex: "1" }}
                    value={selectedDistrict}
                    onClick={toggleDistrictList}
                  />
                  <div
                    className={
                      selectedDistrict.length === 0
                        ? "labelline"
                        : "labelline fix"
                    }
                  >
                    District
                  </div>
                  {selectedDistrictShow ? (
                    <i
                      className="fa-solid fa-chevron-up"
                      style={{ fontSize: "16px" }}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-chevron-down"
                      style={{ fontSize: "16px" }}
                    ></i>
                  )}
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
                    selectedDistrictShow ? "show-list-55 show-556" : "hide-list"
                  }
                >
                  {/* Render district options based on selected state */}

                  {fetchDistricts(selectedState).map(
                    (districtOption, index) => (
                      <p
                        key={index}
                        style={{ cursor: "pointer", marginTop: "-14px" }}
                        // onClick={() => setSelectedDistrict(districtOption)}
                        onClick={() => handleDistrictSelect(districtOption)}
                      >
                        {districtOption}
                      </p>
                    )
                  )}
                </div>
              </div>

              <div className="email-container">
                <div className="edit-conatien">
                  {/* <h3>Phone</h3> */}
                  {/* <p>Edit</p> */}
                </div>
                <div className="div-f f-d f-d-1 f-d-2">
                  <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setPhone(e.target.value)}
                    //   onChange={(e)=>setEmail(e.target.value)}
                    style={{ zIndex: "1" }}
                    // value={email}
                    //   readOnly
                    // onClick={toggleCourseList}
                  />
                  <div
                    className={
                      mobile.length === 0 ? "labelline" : "labelline fix"
                    }
                  >
                    Phone
                  </div>
                </div>
              </div>
              <div className="email-container">
                <div className="edit-conatien">
                  {/* <h3>Phone</h3> */}
                  {/* <p>Edit</p> */}
                </div>
                <div className="div-f f-d f-d-1 f-d-2">
                  <input
                    type="text"
                    value={youtubesocialMedia}
                    onChange={(e) => setYoutube(e.target.value)}
                    //   onChange={(e)=>setEmail(e.target.value)}
                    style={{ zIndex: "1" }}
                    // value={email}
                    //   readOnly
                    // onClick={toggleCourseList}
                  />
                  <div
                    className={
                      youtubesocialMedia.length === 0
                        ? "labelline"
                        : "labelline fix"
                    }
                  >
                    Youtube Social Media
                  </div>
                </div>
              </div>
              <div className="email-container">
                <div className="edit-conatien">
                  {/* <h3>Phone</h3> */}
                  {/* <p>Edit</p> */}
                </div>
                <div className="div-f f-d f-d-1 f-d-2">
                  <input
                    type="text"
                    value={linkdinsocialMedia}
                    onChange={(e) => setLinkdin(e.target.value)}
                    //   onChange={(e)=>setEmail(e.target.value)}
                    style={{ zIndex: "1" }}
                    // value={email}
                    //   readOnly
                    // onClick={toggleCourseList}
                  />
                  <div
                    className={
                      linkdinsocialMedia.length === 0
                        ? "labelline"
                        : "labelline fix"
                    }
                  >
                    Linkdin Social Media
                  </div>
                </div>
              </div>

              <div className="email-container">
                <div className="edit-conatien">
                  {/* <h3>Phone</h3> */}
                  {/* <p>Edit</p> */}
                </div>
                <div className="div-f f-d f-d-1 f-d-2">
                  <input
                    type="text"
                    value={linkdinsocialMedia}
                    onChange={(e) => setLinkdin(e.target.value)}
                    //   onChange={(e)=>setEmail(e.target.value)}
                    style={{ zIndex: "1" }}
                    // value={email}
                    //   readOnly
                    // onClick={toggleCourseList}
                  />
                  <div
                    className={
                      linkdinsocialMedia.length === 0
                        ? "labelline"
                        : "labelline fix"
                    }
                  >
                    Account No
                  </div>
                </div>
              </div>
              <div className="email-container">
                <div className="inner-e-container">
                  <p style={{ fontSize: "12px" }}>Upload Cancelled Cheque</p>
                  <input
                    type="file"
                    name="profilephoto"
                    id=""
                    onChange={convertToBase64ForProfilePhoto}
                  />
                </div>
              </div>
              <div className="email-container" style={{ marginTop: "20px" }}>
                <div className="edit-conatien">
                  {/* <h3>Phone</h3> */}
                  {/* <p>Edit</p> */}
                </div>
                <div className="div-f f-d f-d-1 f-d-2">
                  <input
                    type="text"
                    value={linkdinsocialMedia}
                    onChange={(e) => setLinkdin(e.target.value)}
                    //   onChange={(e)=>setEmail(e.target.value)}
                    style={{ zIndex: "1" }}
                    // value={email}
                    //   readOnly
                    // onClick={toggleCourseList}
                  />
                  <div
                    className={
                      linkdinsocialMedia.length === 0
                        ? "labelline"
                        : "labelline fix"
                    }
                  >
                    Upi Code
                  </div>
                </div>
              </div>
              <div className="email-container">
                <div className="edit-conatien">
                  {/* <h3>Phone</h3> */}
                  {/* <p>Edit</p> */}
                </div>
                <div className="div-f f-d f-d-1 f-d-2">
                  <input
                    type="text"
                    value={linkdinsocialMedia}
                    onChange={(e) => setLinkdin(e.target.value)}
                    //   onChange={(e)=>setEmail(e.target.value)}
                    style={{ zIndex: "1" }}
                    // value={email}
                    //   readOnly
                    // onClick={toggleCourseList}
                  />
                  <div
                    className={
                      linkdinsocialMedia.length === 0
                        ? "labelline"
                        : "labelline fix"
                    }
                  >
                    Nominee Name
                  </div>
                </div>
              </div>
              <div className="email-container">
                <div className="edit-conatien">
                  {/* <h3>Phone</h3> */}
                  {/* <p>Edit</p> */}
                </div>
                <div className="div-f f-d f-d-1 f-d-2">
                  <input
                    type="text"
                    value={linkdinsocialMedia}
                    onChange={(e) => setLinkdin(e.target.value)}
                    //   onChange={(e)=>setEmail(e.target.value)}
                    style={{ zIndex: "1" }}
                    // value={email}
                    //   readOnly
                    // onClick={toggleCourseList}
                  />
                  <div
                    className={
                      linkdinsocialMedia.length === 0
                        ? "labelline"
                        : "labelline fix"
                    }
                  >
                    Nominee Relation
                  </div>
                </div>
              </div>

              <div className="btn-4">
                <button onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // </Layout>
  );
};

export default ProfileEdit;
