import product1 from '../../assets/images/product1.png'
import product2 from '../../assets/images/product2.jpeg'
import product3 from '../../assets/images/product3.jpeg'
import product4 from '../../assets/images/fume/fume.webp'


const productData = [
  {
    name: 'Biosafety Cabinets',
    title: 'Create a secure environment to handle biological samples with maximum safety and compliance.',
    description1: 'Our wireless Class II Biological Safety Cabinets (BSC) protect users, samples and the environment from hazardous particles and biological materials. These cabinets are useful when handling infectious diseases, toxins or cell cultures where prevention of contamination is essential.',
    description2: 'It also helps keep lab workers safe by reducing exposure to droplets, splashes or airborne contaminants, ensuring no hazardous materials escape from the work area.',
    img1: product1,  
    img2: product2,
    img3: product3,
    img4: product2,
    italics: ["biological",'samples', "maximum","safety", "compliance."]
  },
  {
    name: 'Fume Hoods',
    title: 'Safe, efficient and eco-friendly protection from hazardous fumes.',
    description1: 'Our ductless fume hoods use high-quality activated carbon filters to absorb harmful fumes directly at the work surface, keeping both users and the environment safe. Built in the USA at our ISO 9001 and ISO 14001 certified facility, these fume hoods meet the highest international quality and environmental standards.',
    description2: 'With continuous airflow that pulls contaminants away from the user, our hoods recycle clean air back into the workspace. They are energy-efficient, safe, and easy to use. Available in multiple configurations—like mobile and polypropylene models—they offer flexibility to meet diverse laboratory needs.',
    img1: product4,  // Replace with actual image paths
    img2: product2,
    img3: product3,
    img4: product2,
    italics: ["Safe,", "efficient", "eco-friendly"]
  },  
  {
    name: 'Laminar Flow Cabinets',
    title: 'Ensure contaminant free, precision tasks in research, healthcare and manufacturing.',
    description1: 'The AirBio laminar flow hood series is available in horizontal and vertical models that provide a clean, sterile, clean environment. These workstations are designed to keep materials and equipment free of contamination, making them ideal for jobs where cleanliness is critical.',
    description2: 'Our laminar flow hoods are ideal for handling non-hazardous materials and provide easy access to the work area. They feature AirBios filtration technology to maintain a clean environment for multiple uses.',
    img1: product1,  // Replace with actual image paths
    img2: product2,
    img3: product3,
    img4: product2,
    italics: ["free,", "contaminant", "healthcare"]
  },
  
];

export default productData;
