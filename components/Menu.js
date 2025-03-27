"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categories = {
  "Für unsere kleinen Gäste": [
    { name: "Portion Pommes", price: "4,50 €", image: "https://cdn.prod.website-files.com/66520edcc0506d5f141ce529/66f3048c6c624b2d50e9e9e6_Pommes-550x450_klein.jpeg" },
    { name: "Spaghetti Bolognese", price: "5,90 €", image: "https://img.chefkoch-cdn.de/rezepte/393031127655461/bilder/1585337/crop-642x428/spaghetti-bolognese.jpg" },
    { name: "Tortellini alla Panna in Sahnesauce", price: "6,90 €", image: "https://fitaliancook.com/wp-content/uploads/2022/03/tortellini-alla-panna-rezept.jpg" },
    { name: "Pizza nach Wahl", price: "7,90 €", image: "/path/to/image4.jpg" },
    { name: "Schnitzel mit Pommes", price: "8,90 €", image: "/path/to/image5.jpg" },
  ],
  Desserts: [
    { name: "Panna Cotta", price: "6,50 €", image: "https://cdn.jwplayer.com/v2/media/XUqZDSbG/thumbnails/HNylojyg.jpg" },
    { name: "Tiramisu", price: "6,90 €", image: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2024/09/THUMB-VIDEO-2_rev1-56.jpeg?im=Resize,width=742;" },
    { name: "Profiteroles", price: "6,90 €", image: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/chocolateprofiterole_86196_16x9.jpg" },
    { name: "Crème Brûlée", price: "6,90 €", image: "https://img.chefkoch-cdn.de/rezepte/279041105901002/bilder/1502490/crop-960x720/creme-brulee.jpg" },
  ],
  Eis: [
    { name: "Gemischtes Eis ohne Sahne", price: "5,90 €", image: "/path/to/ice1.jpg" },
    { name: "Gemischtes Eis mit Sahne", price: "6,50 €", image: "/path/to/ice2.jpg" },
    { name: "Tartufo", price: "6,90 €", image: "/path/to/ice3.jpg" },
    { name: "Vanilleeis mit heißen Himbeeren", price: "7,90 €", image: "/path/to/ice4.jpg" },
  ],
  Spirituosen: [
    { name: "Ramazzotti (4cl)", price: "3,40 €", image: "/path/to/spirit1.jpg" },
    { name: "Averna (4cl)", price: "3,40 €", image: "/path/to/spirit2.jpg" },
    { name: "Sambuca (4cl)", price: "3,40 €", image: "/path/to/spirit3.jpg" },
    { name: "Jägermeister (4cl)", price: "3,40 €", image: "/path/to/spirit4.jpg" },
    { name: "Obstler (4cl)", price: "3,40 €", image: "/path/to/spirit5.jpg" },
    { name: "Fernet Branca/Menta (4cl)", price: "3,40 €", image: "/path/to/spirit6.jpg" },
    { name: "Baileys (4cl)", price: "3,40 €", image: "/path/to/spirit7.jpg" },
    { name: "Amaretto (4cl)", price: "3,40 €", image: "/path/to/spirit8.jpg" },
    { name: "Grappa (4cl)", price: "3,90 €", image: "/path/to/spirit9.jpg" },
    { name: "Jack Daniels (4cl)", price: "4,50 €", image: "/path/to/spirit10.jpg" },
    { name: "Sambuca Caffè (4cl)", price: "3,40 €", image: "/path/to/spirit11.jpg" },
  ],
  Heißgetränke: [
    { name: "Tee (verschiedene Sorten)", price: "2,50 €", image: "/path/to/hotdrink1.jpg" },
    { name: "Espresso", price: "2,10 €", image: "/path/to/hotdrink2.jpg" },
    { name: "Espresso Doppelt", price: "4,00 €", image: "/path/to/hotdrink3.jpg" },
    { name: "Tasse Kaffee", price: "2,10 €", image: "/path/to/hotdrink4.jpg" },
    { name: "Cappuccino", price: "3,20 €", image: "/path/to/hotdrink5.jpg" },
    { name: "Tasse Kakao", price: "3,50 €", image: "/path/to/hotdrink6.jpg" },
    { name: "Milchkaffee", price: "4,20 €", image: "/path/to/hotdrink7.jpg" },
    { name: "Latte Macchiato", price: "4,50 €", image: "/path/to/hotdrink8.jpg" },
  ],
  "Alkoholfreie Getränke": [
    { name: "Coca-Cola Light/Zero (0,2L/0,4L)", price: "2,10 € / 4,20 €", image: "https://media.istockphoto.com/id/1393991948/de/foto/cola-mit-zersto%C3%9Fenem-eis-in-glas-und-es-gibt-wassertr%C3%B6pfchen-herum-k%C3%BChles-schwarzes-frisches.jpg" },
    { name: "Fanta/Sprite (0,2L/0,4L)", price: "2,10 € / 4,20 €", image: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-12/231213-sprite-fanta-mn-1640-d094b2.jpg" },
    { name: "Bitter Lemon (0,2L/0,4L)", price: "2,30 € / 4,60 €", image: "/path/to/drink3.jpg" },
    { name: "Apfelsaftschorle (0,2L/0,4L)", price: "2,10 € / 4,20 €", image: "/path/to/drink4.jpg" },
    { name: "Orangensaft (0,2L)", price: "2,50 €", image: "/path/to/drink5.jpg" },
    { name: "Apfelsaft (0,2L)", price: "2,50 €", image: "/path/to/drink6.jpg" },
    { name: "Johannisbeersaft (0,2L)", price: "2,50 €", image: "/path/to/drink7.jpg" },
    { name: "Mineralwasser (0,2L/0,4L)", price: "1,90 € / 3,80 €", image: "/path/to/drink8.jpg" },
    { name: "Odenwaldquelle (0,75L)", price: "5,90 €", image: "/path/to/drink9.jpg" },
  ],
  Bier: [
    { name: "Schmucker Pils (0,3L/0,5L)", price: "3,00 € / 4,80 €", image: "/path/to/beer1.jpg" },
    { name: "Schmucker Radler (0,3L/0,5L)", price: "3,00 € / 4,80 €", image: "/path/to/beer2.jpg" },
    { name: "Schmucker Landbier (0,3L/0,5L)", price: "3,00 € / 4,80 €", image: "/path/to/beer3.jpg" },
    { name: "Schmucker Hefeweizen (0,5L)", price: "4,80 €", image: "/path/to/beer4.jpg" },
    { name: "Schmucker Hefe-Dunkel (0,5L)", price: "4,40 €", image: "/path/to/beer5.jpg" },
    { name: "Schmucker Kristall-Weizen (0,5L)", price: "4,40 €", image: "/path/to/beer6.jpg" },
    { name: "Schmucker Pils alkoholfrei (0,33L)", price: "2,90 €", image: "/path/to/beer7.jpg" },
    { name: "Schmucker Hefeweizen alkoholfrei (0,5L)", price: "4,40 €", image: "/path/to/beer8.jpg" },
    { name: "Malzbier (0,33L)", price: "2,90 €", image: "/path/to/beer9.jpg" },
  ],
  Wein: [
    { name: "Lambrusco, kalt (0,2L)", price: "5,50 €", image: "/path/to/wine1.jpg" },
    { name: "Montepulciano (0,2L)", price: "6,20 €", image: "/path/to/wine2.jpg" },
    { name: "Chianti (0,2L)", price: "6,20 €", image: "/path/to/wine3.jpg" },
    { name: "Merlot (0,2L)", price: "6,20 €", image: "/path/to/wine4.jpg" },
    { name: "Primitivo (0,2L)", price: "6,90 €", image: "/path/to/wine5.jpg" },
    { name: "Nero d’Avola (0,2L)", price: "7,50 €", image: "/path/to/wine6.jpg" },
    { name: "Rosato Branciforti (0,2L)", price: "5,90 €", image: "/path/to/wine7.jpg" },
    { name: "Bardolino Rosé (0,2L)", price: "5,90 €", image: "/path/to/wine8.jpg" },
    { name: "Frizzantino, lieblich (0,2L)", price: "5,50 €", image: "/path/to/wine9.jpg" },
    { name: "Chardonnay (0,2L)", price: "5,90 €", image: "/path/to/wine10.jpg" },
    { name: "Pinot Grigio (0,2L)", price: "6,50 €", image: "/path/to/wine11.jpg" },
    { name: "Catarratto Sicilia (0,2L)", price: "6,90 €", image: "/path/to/wine12.jpg" },
    { name: "Lugana Gardasee (0,2L)", price: "7,50 €", image: "/path/to/wine13.jpg" },
    { name: "Apfelwein pur oder Schorle (0,25L/0,5L)", price: "2,10 € / 4,20 €", image: "/path/to/wine14.jpg" },
  ],
  Aperitiv: [
    { name: "Prosecco (0,1L)", price: "4,00 €", image: "/path/to/aperitif1.jpg" },
    { name: "Campari Soda oder mit Orange (0,2L)", price: "6,90 €", image: "/path/to/aperitif2.jpg" },
    { name: "Spritz Aperol (0,2L)", price: "7,50 €", image: "/path/to/aperitif3.jpg" },
    { name: "Limoncello Spritz (0,2L)", price: "7,50 €", image: "/path/to/aperitif4.jpg" },
    { name: "Martini Bianco (5cl)", price: "4,90 €", image: "/path/to/aperitif5.jpg" },
  ],
  Vorspeisen: [
    { name: "Bruschetta Schützenhof", price: "7,50 €", image: "/path/to/appetizer1.jpg" },
    { name: "Meeresfrüchte Salat", price: "13,90 €", image: "/path/to/appetizer2.jpg" },
    { name: "Gemischter Vorspeisenteller", price: "14,50 €", image: "/path/to/appetizer3.jpg" },
  ],
  Suppen: [
    { name: "Tortellini in frischer Rinderbrühe", price: "6,90 €", image: "/path/to/soup1.jpg" },
    { name: "Tomatensuppe", price: "6,90 €", image: "/path/to/soup2.jpg" },
  ],
  Salate: [
    { name: "Kleiner gemischter Salat", price: "4,90 €", image: "/path/to/salad1.jpg" },
    { name: "Tomatensalat mit Thunfisch", price: "8,90 €", image: "/path/to/salad2.jpg" },
    { name: "Salat Caprese", price: "9,50 €", image: "/path/to/salad3.jpg" },
    { name: "Italienischer Salat", price: "10,90 €", image: "/path/to/salad4.jpg" },
    { name: "Salat Venezia", price: "12,50 €", image: "/path/to/salad5.jpg" },
  ],
  Pasta: [
    { name: "Spaghetti in Tomatensauce", price: "9,50 €", image: "/path/to/pasta1.jpg" },
    { name: "Spaghetti Bolognese", price: "10,50 €", image: "/path/to/pasta2.jpg" },
    { name: "Spaghetti Aglio Olio e Peperoncino", price: "10,50 €", image: "/path/to/pasta3.jpg" },
    { name: "Penne Arrabiata", price: "10,50 €", image: "/path/to/pasta4.jpg" },
    { name: "Penne Rossini", price: "10,50 €", image: "/path/to/pasta5.jpg" },
    { name: "Rigatoni al Forno", price: "10,50 €", image: "/path/to/pasta6.jpg" },
    { name: "Tortellini alla Panna", price: "11,90 €", image: "/path/to/pasta7.jpg" },
    { name: "Penne Greca", price: "12,90 €", image: "/path/to/pasta8.jpg" },
    { name: "Nudel Mix", price: "11,90 €", image: "/path/to/pasta9.jpg" },
    { name: "Rigatoni mit 4 Käsesaucen", price: "12,90 €", image: "/path/to/pasta10.jpg" },
  ],
  "Hausgemachte Pasta": [
    { name: "Pasta Schützenhof", price: "9,90 €", image: "/path/to/homemade1.jpg" },
    { name: "Lasagne al Forno", price: "11,90 €", image: "/path/to/homemade2.jpg" },
    { name: "Pasta in Svizzera Sauce", price: "11,50 €", image: "/path/to/homemade3.jpg" },
    { name: "Tagliatelle Sandra", price: "11,50 €", image: "/path/to/homemade4.jpg" },
    { name: "Tagliatelle in Spinat-Gorgonzola-Sauce", price: "12,50 €", image: "/path/to/homemade5.jpg" },
    { name: "Gefüllte Gnocchi alla Sorrentina", price: "11,90 €", image: "/path/to/homemade6.jpg" },
    { name: "Cannelloni", price: "11,90 €", image: "/path/to/homemade7.jpg" },
    { name: "Scialatielli", price: "13,90 €", image: "/path/to/homemade8.jpg" },
    { name: "Tortelloni", price: "12,90 €", image: "/path/to/homemade9.jpg" },
  ],
  Fleischgerichte: [
    { name: "Schnitzel mit Pommes und Salat", price: "14,50 €", image: "/path/to/meat1.jpg" },
    { name: "Jägerschnitzel", price: "16,50 €", image: "/path/to/meat2.jpg" },
    { name: "Zwiebelschnitzel", price: "16,50 €", image: "/path/to/meat3.jpg" },
    { name: "Schnitzel Svizzera", price: "17,50 €", image: "/path/to/meat4.jpg" },
    { name: "Kochkäseschnitzel", price: "16,90 €", image: "/path/to/meat5.jpg" },
    { name: "Schnitzel Parmigiana", price: "17,90 €", image: "/path/to/meat6.jpg" },
    { name: "Schnitzel alla Seppel", price: "17,90 €", image: "/path/to/meat7.jpg" },
    { name: "Schweinelende Svizzera", price: "18,50 €", image: "/path/to/meat8.jpg" },
    { name: "Putenfilet vom Grill", price: "16,90 €", image: "/path/to/meat9.jpg" },
    { name: "Putenrahmschnitzel", price: "17,50 €", image: "/path/to/meat10.jpg" },
    { name: "Putenschnitzel Svizzera", price: "17,50 €", image: "/path/to/meat11.jpg" },
  ],
  "Grill-Spezialitäten": [
    { name: "Rumpsteak vom Grill", price: "24,90 €", image: "/path/to/grill1.jpg" },
    { name: "Rumpsteak mit Zwiebeln", price: "26,90 €", image: "/path/to/grill2.jpg" },
    { name: "Rumpsteak Svizzera", price: "27,50 €", image: "/path/to/grill3.jpg" },
    { name: "Rumpsteak Gorgonzola", price: "28,50 €", image: "/path/to/grill4.jpg" },
    { name: "Gegrillte Calamari", price: "24,90 €", image: "/path/to/grill5.jpg" },
    { name: "Lachsfilet vom Grill", price: "24,90 €", image: "/path/to/grill6.jpg" },
  ],
  Beilagen: [
    { name: "Portion Gemüse oder Bratkartoffel", price: "4,50 €", image: "/path/to/side1.jpg" },
  ],
  Pizza: [
    { name: "Pizzabrot", price: "4,90 €", image: "https://www.allrecipes.com/thmb/0xH8n2D4cC97t7mcC7eT2SDZ0aE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg" },
    { name: "Margherita", price: "8,90 €", image: "https://www.zauberdergewuerze.de/magazin/wp-content/uploads/2023/03/05_oregano_istock-1174701047.jpg" },
    { name: "Salami", price: "9,50 €", image: "https://www.zauberdergewuerze.de/magazin/wp-content/uploads/2023/03/05_oregano_istock-1174701047.jpg" },
    { name: "Tonno e Cipolla", price: "10,50 €", image: "https://www.zauberdergewuerze.de/magazin/wp-content/uploads/2023/03/05_oregano_istock-1174701047.jpg" },
    { name: "Prosciutto Funghi", price: "10,50 €", image: "/path/to/pizza5.jpg" },
    { name: "Hawaii", price: "10,50 €", image: "/path/to/pizza6.jpg" },
    { name: "Pugliese", price: "10,50 €", image: "/path/to/pizza7.jpg" },
    { name: "Mista", price: "10,90 €", image: "/path/to/pizza8.jpg" },
    { name: "Quattro Stagioni", price: "10,90 €", image: "/path/to/pizza9.jpg" },
    { name: "Capricciosa", price: "10,90 €", image: "/path/to/pizza10.jpg" },
    { name: "Quattro Formaggi", price: "10,90 €", image: "/path/to/pizza11.jpg" },
    { name: "Lucana", price: "12,90 €", image: "/path/to/pizza12.jpg" },
    { name: "Salsiccia e Rucola", price: "12,50 €", image: "/path/to/pizza13.jpg" },
    { name: "Vegetaria", price: "12,50 €", image: "/path/to/pizza14.jpg" },
    { name: "Calabrese", price: "12,50 €", image: "/path/to/pizza15.jpg" },
    { name: "Langer", price: "12,50 €", image: "/path/to/pizza16.jpg" },
    { name: "Mare", price: "14,90 €", image: "/path/to/pizza17.jpg" },
    { name: "Ortolana", price: "12,90 €", image: "/path/to/pizza18.jpg" },
    { name: "Primavera", price: "13,90 €", image: "/path/to/pizza19.jpg" },
    { name: "Schützenhof", price: "14,90 €", image: "/path/to/pizza20.jpg" },
    { name: "Kochkäse Focaccia mit Rucola", price: "9,90 €", image: "/path/to/pizza21.jpg" },
    { name: "Gemischter Salat auf Pizzabrot", price: "11,90 €", image: "/path/to/pizza22.jpg" },
  ],
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(Object.keys(categories)[0]);

  return (
    <section id="menu" className=" w-full md:w-auto py-16 px-6  bg-[#F5EACF] ">
      <div className="relative flex justify-center items-center py-10">
  {/* Left Olive Branch */}
  <img
    src="/left branch.png"
    alt="Left Olive Branch"
    className="absolute left-1/5 w-40 md:w-80 "
  />

  {/* Title */}
  <h2 className="text-6xl font-bold font-[Italianno] text-center">Our Menu</h2>

  {/* Right Olive Branch */}
  <img
    src="/right branch.png"
    alt="Right Olive Branch"
    className="absolute right-1/5 w-40 md:w-80"
  />
</div>

      <div className="flex flex-wrap justify-center gap-4 my-6">
        {Object.keys(categories).map((category) => (
          <Button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`rounded-full px-6 py-2 border-2 
            ${activeCategory === category ? 'bg-[#4F583D] text-white border-[#F5EACF]' : 'bg-[#F5EACF] text-[#4F583D] border-[#4F583D]'} 
            hover:bg-[#4F583D] hover:text-white hover:[#F5EACF]`}
        >
          {category}
        </Button>
        
        
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-6 ">
        {categories[activeCategory].map((item, index) => (
          <Card key={index} className="relative overflow-hidden border-0 h-40 rounded-none ">
          {/* Full Image Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          />
        
          {/* Gradient Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#4F583D] to-transparent"></div>
        
          {/* Text at the Bottom */}
          <CardContent className="absolute inset-x-0 bottom-0 p-4 text-white">
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-sm">{item.price}</p>
          </CardContent>
        </Card>
        
        
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-1 my-2"></div>
      <h2 className="text-4xl font-bold mx-6 font-[Italianno]">
    Zusatzstoffe & Allergene
  </h2>

  {/* Two-column layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-2  text-gray-800 mx-6 my-6">
    
    {/* Zusatzstoffe Section */}
    <div>
      <h3 className="text-ml font-bold text-[#4F583D] ">Zusatzstoffe:</h3>
      <p className="text-ml leading-relaxed">
        <span className="font-semibold">1.</span> Konservierungsstoff | <span className="font-semibold">2.</span> Farbstoff | 
        <span className="font-semibold">3.</span> Phosphat | <span className="font-semibold">4.</span> Geschmacksverstärker | 
        <span className="font-semibold">5.</span> Nitritpökelsalz | <span className="font-semibold">6.</span> Antioxidationsmittel | 
        <span className="font-semibold">7.</span> Geschwärzt | <span className="font-semibold">8.</span> Koffeinhaltig | 
        <span className="font-semibold">9.</span> Süßungsmittel | <span className="font-semibold">10.</span> Phenylalaninquelle | 
        <span className="font-semibold">11.</span> Chinhaltig
      </p>
    </div>

    {/* Allergene Section */}
    <div>
      <h3 className="text-ml font-bold text-[#4F583D] ">Allergene:</h3>
      <p className="text-ml leading-relaxed">
        <span className="font-semibold">A.</span> Weizen | <span className="font-semibold">B.</span> Krebstiere | 
        <span className="font-semibold">C.</span> Eier | <span className="font-semibold">D.</span> Fisch | 
        <span className="font-semibold">E.</span> Erdnüsse | <span className="font-semibold">F.</span> Milch | 
        <span className="font-semibold">G.</span> Mandeln | <span className="font-semibold">H.</span> Pistazien | 
        <span className="font-semibold">I.</span> Haselnüsse | <span className="font-semibold">L.</span> Sellerie | 
        <span className="font-semibold">M.</span> Gerste | <span className="font-semibold">O.</span> Senf | 
        <span className="font-semibold">P.</span> Weichtiere | <span className="font-semibold">R.</span> Schwefeldioxid/Sulfite
      </p>
    </div>

  </div>
    </section>
    
  );
};

export default Menu;
