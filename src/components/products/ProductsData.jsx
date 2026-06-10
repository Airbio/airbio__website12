import product1 from '../../assets/images/product1.png'
import product2 from '../../assets/images/product2.jpeg'
import product3 from '../../assets/images/product3.jpeg'
import product4 from '../../assets/images/fume/Fume-Hoods.png'
import Bproduct2 from '../../assets/images/biosafety/bsc class_B2 (Falcon)/BSC CLASS _ B2 (Falcon)-FRONT1.webp'
import Bproduct1 from '../../assets/images/biosafety/Main bsc class 2 A2/MAIN BSC CLASS II A2-FRONT.webp'
import Bproduct3 from '../../assets/images/biosafety/bsc class 2 B2 (Agies)/BSC CLASS II B2 (Agies)-FRONT.webp'
import Bproduct4 from '../../assets/images/biosafety/bsc class 2 A2 (Agies)/BSC CLASS II A2 (Agies)-FRONT.webp'
import Lproduct1 from '../../assets/images/laminar/Vertical Laminar Flow (Velocity)/Vertical Laminar Flow (Velocity)-FRONT.webp'
import Lproduct2 from '../../assets/images/laminar/Vertical Laminar Flow (Velocity)/Vertical Laminar Flow (Velocity)-CROSS.webp'
import Lproduct3 from '../../assets/images/laminar/Vertical Laminar AirFlow/Vertical Laminar Airflow-FRONT.webp'
import Lproduct4 from '../../assets/images/laminar/Vertical Laminar AirFlow/Vertical Laminar Airflow-SIDE (1).webp'
import PCRproduct1 from '../../assets/images/PCRworkstation/GeneSafe with glassdoor handle.png'
import PCRproduct2 from '../../assets/images/PCRworkstation/GeneSafe with glassdoor handle.png'
import PCRproduct3 from '../../assets/images/PCRworkstation/PCRWorkststion-GaneSafe.png'
import PCRproduct4 from '../../assets/images/PCRworkstation/genesafe6.jpeg'
import PassBoxproduct1 from '../../assets/images/StaticPassBox/Static-Pass-Box.png'
import PassBoxproduct2 from '../../assets/images/StaticPassBox/Static-Pass-Box.png'
import PassBoxproduct3 from '../../assets/images/DynamicPassBox/Dynamic-Pass-Box.png'
import PassBoxproduct4 from '../../assets/images/StaticPassBox/Static-Pass-Box-2.png'


const productData = [
  {
    name: 'Biosafety Cabinets',
    title: 'Create a secure environment to handle biological samples with maximum safety and compliance.',
    description1: 'Our World Class II Biological Safety Cabinets (BSC) protect users, samples and the environment from hazardous particles and biological materials. These cabinets are useful when handling infectious diseases, toxins or cell cultures where prevention of contamination is essential.',
    description2: 'It also helps keep lab workers safe by reducing exposure to droplets, splashes or airborne contaminants, ensuring no hazardous materials escape from the work area.',
    img1: Bproduct1,  
    img2: Bproduct2,
    img3: Bproduct3,
    img4: Bproduct4,
    italics: ["biological",'samples', "maximum","safety", "compliance."],
    route: "/product/Biosafety"
  },
  {
    name: 'Fume Hoods',
    title: 'Safe, efficient and eco-friendly protection from hazardous fumes.',
    description1: 'Our ductless fume hoods use high-quality activated carbon filters to absorb harmful fumes directly at the work surface, keeping both users and the environment safe. Built in the USA at our ISO 9001 and ISO 14001 certified facility, these fume hoods meet the highest international quality and environmental standards.' ,
    description2: ' our hoods recycle clean air back into the workspace. They are energy-efficient, safe, and easy to use. Available in multiple configurations—like mobile and polypropylene models—they offer flexibility to meet diverse laboratory needs.',
    img1: product4,  
    img2: product4,
    img3: product4,
    img4: product4,
    italics: ["Safe,", "efficient", "eco-friendly"],
    route: "/product/FumeHoods"
  },  
  {
    name: 'Laminar Flow Cabinets',
    title: 'Ensure contaminant free, precision tasks in research, healthcare and manufacturing.',
    description1: 'The AirBio laminar flow hood series is available in horizontal and vertical models that provide a clean, sterile, clean environment. These workstations are designed to keep materials and equipment free of contamination, making them ideal for jobs where cleanliness is critical.',
    description2: 'Our laminar flow hoods are ideal for handling non-hazardous materials and provide easy access to the work area. They feature AirBios filtration technology to maintain a clean environment for multiple uses.',
    img1: Lproduct1, 
    img2: Lproduct2,
    img3: Lproduct3,
    img4: Lproduct4,
    italics: ["free,", "contaminant", "healthcare"],
    route: "/product/laminar"
  },
  {
    name: 'PCR Workstations',
    title: 'Advanced Contamination-Control Workstation for Molecular Biology Applications',
    description1: 'AirBio GeneSafe PCR Workstation is a high-performance clean working enclosure engineered for contamination-free PCR setup and molecular biology applications. ',
    description2: ' Designed in accordance with international laboratory standards, the workstation combines UV decontamination technology, ergonomic design, and  HEPA-filtered airflow to ensure reliable and reproducible PCR preparation.',
    img1: PCRproduct1, 
    img2: PCRproduct2,
    img3: PCRproduct3,
    img4: PCRproduct4,
    italics: ["free,", "contaminant", "healthcare"],
    route: "/product/PCRworkstation"
  },
  {
    name: 'Pass Boxes',
    title: 'Pass Boxes ensure safe and contamination-free material transfer between cleanroom areas.',
    description1: 'AirBio Pass Boxes are essential cleanroom equipment designed to transfer materials between two different classified areas without compromising the sterility of the environment.',
    description2: 'They act as an airlock system that prevents cross-contamination during material movement.',
    img1: PassBoxproduct1, 
    img2: PassBoxproduct2,
    img3: PassBoxproduct3,
    img4: PassBoxproduct4,
    italics: ["free,", "contaminant", "healthcare"],
    route: "/product/PassBox"
  },
  
];

export default productData;
