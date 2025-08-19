// const medicines = [
//   {
//     title: "Tefi-O 200 DT tab",
//     description: "Cefixime Dispersible Tab IP 200 mg",
//     brand: "Tefi-O",
//     companyName: "LEDERLE",
//     packageSize: "10*10 Tab", // Dummy
//     mrp: 109,
//     inStockNumber: 10, // Dummy
//     isAvailable: true, // Dummy
//     image: {
//       public_id: "dummy_public_id_tefi-o-200-dt",
//       url: "https://via.placeholder.com/150?text=Tefi-O+200+DT+tab",
//     },
//   },
//   {
//     title: "Zuraceff tab",
//     description: "Cefixime Dispersible Tab IP 200 mg",
//     brand: "Zuraceff",
//     companyName: "ALKEM",
//     packageSize: "10*10 Tab", 
//     mrp: 109,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_zuraceff",
//       url: "https://via.placeholder.com/150?text=Zuraceff+tab",
//     },
//   },
//   {
//     title: "Cefaclass-200 tab",
//     description: "Cefixime Dispersible Tab IP 200 mg",
//     brand: "Cefaclass-200",
//     companyName: "MANKIND",
//     packageSize: "10*10 Tab",
//     mrp: 109,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_cefaclass-200",
//       url: "https://via.placeholder.com/150?text=Cefaclass-200+tab",
//     },
//   },
//   {
//     title: "Ximeceff - 200 tab",
//     description: "Cefixime Dispersible Tab IP 200 mg",
//     brand: "Ximeceff",
//     companyName: "LUPIN",
//     packageSize: "10*10 Tab",
//     mrp: 109,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_ximeceff-200",
//       url: "https://via.placeholder.com/150?text=Ximeceff+-+200+tab",
//     },
//   },
//   {
//     title: "Numecet-Plus tab",
//     description: "Nimesulide & Paracetamol tab",
//     brand: "Numecet-Plus",
//     companyName: "LEDERLE",
//     packageSize: "Per strip", // Not exact, dummy
//     mrp: 50,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_numecet-plus",
//       url: "https://via.placeholder.com/150?text=Numecet-Plus+tab",
//     },
//   },
//   {
//     title: "Numecet-Plus Gold tab",
//     description: "Nimesulide & Paracetamol tab",
//     brand: "Numecet-Plus Gold",
//     companyName: "LEDERLE",
//     packageSize: "Per strip",
//     mrp: 53,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_numecet-plus-gold",
//       url: "https://via.placeholder.com/150?text=Numecet-Plus+Gold+tab",
//     },
//   },
//   {
//     title: "Bestoslide - P tab",
//     description: "Nimesulide & Paracetamol tab",
//     brand: "Bestoslide",
//     companyName: "BESTO CHEM",
//     packageSize: "Per strip",
//     mrp: 102,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_bestoslide-p",
//       url: "https://via.placeholder.com/150?text=Bestoslide+-+P+tab",
//     },
//   },
//   {
//     title: "Rabigen-DSR cap",
//     description: "Rabeprazole Sodium(EC) & Domperidone(SR) cap",
//     brand: "Rabigen-DSR",
//     companyName: "BIOGEN",
//     packageSize: "10*10 Tab", // Dummy
//     mrp: 140,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_rabigen-dsr",
//       url: "https://via.placeholder.com/150?text=Rabigen-DSR+cap",
//     },
//   },
//   {
//     title: "Robotac-DSR cap",
//     description: "Rabeprazole Sodium(EC) & Domperidone(SR) cap",
//     brand: "Robotac-DSR",
//     companyName: "LEDERLE",
//     packageSize: "10*10 Tab", // Dummy
//     mrp: 160,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_robotac-dsr",
//       url: "https://via.placeholder.com/150?text=Robotac-DSR+cap",
//     },
//   },
//   {
//     title: "Daneeb-DSR cap",
//     description: "Rabeprazole Sodium(EC) & Domperidone(SR) cap",
//     brand: "Daneeb-DSR",
//     companyName: "R.T PHARMA",
//     packageSize: "10*10 Tab", // Dummy
//     mrp: 125,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_daneeb-dsr",
//       url: "https://via.placeholder.com/150?text=Daneeb-DSR+cap",
//     },
//   },
//   {
//     title: "Pantaled-DSR cap",
//     description: "Pantoprazole Sodium Gastro-resistant & Domperidone Prolonged release cap",
//     brand: "Pantaled-DSR",
//     companyName: "LEDERLE",
//     packageSize: "10*10 Tab", // Dummy
//     mrp: 145,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_pantaled-dsr",
//       url: "https://via.placeholder.com/150?text=Pantaled-DSR+cap",
//     },
//   },
//   {
//     title: "Daneepan-DSR cap",
//     description: "Pantoprazole Sodium Gastro-resistant & Domperidone cap",
//     brand: "Daneepan-DSR",
//     companyName: "R.T PHARMA",
//     packageSize: "10*10 Tab", // Dummy
//     mrp: 149,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_daneepan-dsr",
//       url: "https://via.placeholder.com/150?text=Daneepan-DSR+cap",
//     },
//   },
//   {
//     title: "Acloled-P tab",
//     description: "Aceclofenac + Paracetamol tab",
//     brand: "Acloled-P",
//     companyName: "LEDERLE",
//     packageSize: "10*10 Tab",
//     mrp: 85,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_acloled-p",
//       url: "https://via.placeholder.com/150?text=Acloled-P+tab",
//     },
//   },
//   {
//     title: "Acloled-SP tab",
//     description: "Aceclofenac + Paracetamol + Serratioptidase tab",
//     brand: "Acloled-SP",
//     companyName: "LEDERLE",
//     packageSize: "10*10 Tab",
//     mrp: 117,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_acloled-sp",
//       url: "https://via.placeholder.com/150?text=Acloled-SP+tab",
//     },
//   },
//   {
//     title: "ALDIGESIC-SP",
//     description: "Aceclofenac + Paracetamol + Serratioptidase",
//     brand: "ALDIGESIC-SP",
//     companyName: "ALKEM",
//     packageSize: "10*10 Tab", // Dummy
//     mrp: 120,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_aldigesic-sp",
//       url: "https://via.placeholder.com/150?text=ALDIGESIC-SP",
//     },
//   },
//   {
//     title: "Voveled-Plus tab",
//     description: "Diclofenac sodium & Paracetamol tab I.P",
//     brand: "Voveled-Plus",
//     companyName: "LEDERLE",
//     packageSize: "10*10 Tab",
//     mrp: 40,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_voveled-plus",
//       url: "https://via.placeholder.com/150?text=Voveled-Plus+tab",
//     },
//   },
//   {
//     title: "Vovimol tab",
//     description: "Diclofenac sodium & Paracetamol tab I.P",
//     brand: "Vovimol",
//     companyName: "LEDERLE",
//     packageSize: "10*10 Tab",
//     mrp: 44,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_vovimol",
//       url: "https://via.placeholder.com/150?text=Vovimol+tab",
//     },
//   },
//   {
//     title: "Acloled-MR tab",
//     description: "Aceclofenac, Paracetamol & Chlorzoxazone tab",
//     brand: "Acloled-MR",
//     companyName: "LEDERLE",
//     packageSize: "10*10 Tab",
//     mrp: 100,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_acloled-mr",
//       url: "https://via.placeholder.com/150?text=Acloled-MR+tab",
//     },
//   },
//   {
//     title: "Megaceclo-MR tab",
//     description: "Aceclofenac, Paracetamol & Chlorzoxazone tab",
//     brand: "Megaceclo-MR",
//     companyName: "ARISTO",
//     packageSize: "10*10 Tab",
//     mrp: 125,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_megaceclo-mr",
//       url: "https://via.placeholder.com/150?text=Megaceclo-MR+tab",
//     },
//   },
//   {
//     title: "Rabitap LS cap",
//     description: "Rabeprazole Sodium(EC) & Levosulpiride(SR) cap",
//     brand: "Rabitap LS",
//     companyName: "ARISTO",
//     packageSize: "10*10 Tab",
//     mrp: 240,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_rabitap-ls",
//       url: "https://via.placeholder.com/150?text=Rabitap+LS+cap",
//     },
//   },
//   {
//     title: "Zyrab LS cap",
//     description: "Rabeprazole Sodium(EC) & Levosulpiride(SR) cap",
//     brand: "Zyrab LS",
//     companyName: "ZYDUS",
//     packageSize: "10*10 Tab",
//     mrp: 192,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_zyrab-ls",
//       url: "https://via.placeholder.com/150?text=Zyrab+LS+cap",
//     },
//   },
//   {
//     title: "Aziled-500 tab",
//     description: "Azithromycin 500 tab",
//     brand: "Aziled-500",
//     companyName: "LEDERLE",
//     packageSize: "10*10 Tab",
//     mrp: 79,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_aziled-500",
//       url: "https://via.placeholder.com/150?text=Aziled-500+tab",
//     },
//   },
//   {
//     title: "Azikem-500 tab",
//     description: "Azithromycin 500 tab",
//     brand: "Azikem-500",
//     companyName: "ALKEM",
//     packageSize: "10*10 Tab",
//     mrp: 79,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_azikem-500",
//       url: "https://via.placeholder.com/150?text=Azikem-500+tab",
//     },
//   },
//   {
//     title: "Azikem-250 tab",
//     description: "Azithromycin 250 tab",
//     brand: "Azikem-250",
//     companyName: "ALKEM",
//     packageSize: "10*10 Tab",
//     mrp: 78,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_azikem-250",
//       url: "https://via.placeholder.com/150?text=Azikem-250+tab",
//     },
//   },
//   {
//     title: "Zedloc-150 tab",
//     description: "Ranitidine Tab 150 mg",
//     brand: "Zedloc-150",
//     companyName: "LEDERLE",
//     packageSize: "10*30 Tab",
//     mrp: 36,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_zedloc-150",
//       url: "https://via.placeholder.com/150?text=Zedloc-150+tab",
//     },
//   },
//   {
//     title: "RASPAR 150 TAB",
//     description: "Ranitidine Tab 150 mg",
//     brand: "RASPAR",
//     companyName: "AJANTA",
//     packageSize: "20*3*10 Tab",
//     mrp: 40,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_raspar-150",
//       url: "https://via.placeholder.com/150?text=RASPAR+150+TAB",
//     },
//   },
//   {
//     title: "Moxday - 250 cap",
//     description: "Amoxycillin Trihydrate cap I.P",
//     brand: "Moxday - 250",
//     companyName: "LEDERLE",
//     packageSize: "10*10 Cap",
//     mrp: 27,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_moxday-250",
//       url: "https://via.placeholder.com/150?text=Moxday+-+250+cap",
//     },
//   },
//   {
//     title: "Labmox - 250 cap",
//     description: "Amoxycillin Trihydrate cap I.P",
//     brand: "Labmox - 250",
//     companyName: "LABORATE",
//     packageSize: "10*10 Cap",
//     mrp: 27,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_labmox-250",
//       url: "https://via.placeholder.com/150?text=Labmox+-+250+cap",
//     },
//   },
//   {
//     title: "HAEMOPROL XT tab",
//     description: "Ferrous Ascorbate Folic Acid tab IP",
//     brand: "HAEMOPROL XT",
//     companyName: "ARISTO",
//     packageSize: "10*10 Tab",
//     mrp: 153,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_haemoprol-xt",
//       url: "https://via.placeholder.com/150?text=HAEMOPROL+XT+tab",
//     },
//   },
//   {
//     title: "Oreled-XT tab",
//     description: "Ferrous Ascorbate Folic Acid & Zinc tab",
//     brand: "Oreled-XT",
//     companyName: "LEDERLE",
//     packageSize: "10*10 Tab",
//     mrp: 185,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_oreled-xt",
//       url: "https://via.placeholder.com/150?text=Oreled-XT+tab",
//     },
//   },
//   {
//     title: "OFLOLED OZ TAB",
//     description: "Ofloxacin & Ornidazole tab I.P",
//     brand: "OFLOLED OZ",
//     companyName: "LEDERLE",
//     packageSize: "20*10 Tab",
//     mrp: 140,
//     inStockNumber: 10,
//     isAvailable: true,
//     image: {
//       public_id: "dummy_public_id_ofloed-oz",
//       url: "https://via.placeholder.com/150?text=OFLOLED+OZ+TAB",
//     },
//   },
//   // ... You can continue with other medicines similarly. Due to space limitation, please ask if you want to generate the full list programmatically.
// ];












const medicines = [
  {
    "title": "Cipday - 500 tab",
    "description": "Ciprofloxacin Tab IP",
    "brand": "Cipday",
    "companyName": "LEDERLE",
    "packageSize": "20*10 tab",
    "mrp": 47,
    "inStockNumber": 35,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_cipday-500",
      "url": "https://via.placeholder.com/150?text=CIPDAY+500+TAB"
    }
  },
  {
    "title": "CITLED-LV tab",
    "description": "Levocetirizine tab IP",
    "brand": "CITLED-LV",
    "companyName": "LEDERLE",
    "packageSize": "20*10 tab",
    "mrp": 52,
    "inStockNumber": 1.99,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_citled-lv-tab",
      "url": "https://via.placeholder.com/150?text=CITLED-LV+TAB"
    }
  },
  {
    "title": "ITRACOR-200 cap",
    "description": "Itraconazole cap BP 200mg",
    "brand": "ITRACOR-200",
    "companyName": "CORANA",
    "packageSize": "10*1*10 cap",
    "mrp": 245,
    "inStockNumber": 67.85,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_itracor-200-cap",
      "url": "https://via.placeholder.com/150?text=ITRACOR-200+CAP"
    }
  },
  {
    "title": "ITRADUS 200 cap",
    "description": "Itraconazole cap BP 200mg",
    "brand": "ITRADUS 200",
    "companyName": "ZYDUS",
    "packageSize": "10*1*10 cap",
    "mrp": 247,
    "inStockNumber": 73.65,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_itradus-200",
      "url": "https://via.placeholder.com/150?text=ITRADUS+200+CAP"
    }
  },
  {
    "title": "ITRADUS 100 cap",
    "description": "Itraconazole cap BP 100mg",
    "brand": "ITRADUS 100",
    "companyName": "ZYDUS",
    "packageSize": "10*1*10 cap",
    "mrp": 186,
    "inStockNumber": 53.12,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_itradus-100",
      "url": "https://via.placeholder.com/150?text=ITRADUS+100+CAP"
    }
  },
  {
    "title": "Pantomed tab",
    "description": "Pantoprazole Gastro-Resistant tab IP40mg",
    "brand": "Pantomed",
    "companyName": "MEDLEY",
    "packageSize": "20*10 tab",
    "mrp": 117,
    "inStockNumber": 14.65,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_pantomed-tab",
      "url": "https://via.placeholder.com/150?text=PANTOMED+TAB"
    }
  },
  {
    "title": "MECOFOL-PLUS cap",
    "description": "Methylcobalamin,Alpha Lipoic Acid,Folic Acid,& Pyridoxine Hydrochloride cap",
    "brand": "MECOFOL-PLUS",
    "companyName": "INTAS",
    "packageSize": "10*1*10 cap",
    "mrp": 227,
    "inStockNumber": 47.55,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_mecofol-plus-cap",
      "url": "https://via.placeholder.com/150?text=MECOFOL-PLUS+CAP"
    }
  },
  {
    "title": "Shellwin K2-7 cap",
    "description": "Calcium Citrate,Calcitriol,Vitamin k-2-7,Omega-3 Fatty Acid(EPA,DHA),Cyanocobalamin,Zinc & Boron Softgel Cap",
    "brand": "Shellwin K2-7",
    "companyName": "WINGS NOVITAS",
    "packageSize": "10*1*10 cap",
    "mrp": 285,
    "inStockNumber": 33.85,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_shellwin-k2-7-cap",
      "url": "https://via.placeholder.com/150?text=SHELLWIN+K2-7+CAP"
    }
  },
  {
    "title": "FERILED SYP",
    "description": "Ferric Ammonium Citrate,Folic Acid & Vitamin B12 Syp",
    "brand": "FERILED",
    "companyName": "LEDERLE",
    "packageSize": "200ML",
    "mrp": 146,
    "inStockNumber": 32.45,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_feriled-syp",
      "url": "https://via.placeholder.com/150?text=FERILED+SYP"
    }
  },
  {
    "title": "XZYME SYP",
    "description": "Digestive Enzyme B Complex with Lysine",
    "brand": "XZYME",
    "companyName": "ANTEX",
    "packageSize": "200ml",
    "mrp": 185,
    "inStockNumber": 41,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_xzyme-syp",
      "url": "https://via.placeholder.com/150?text=XZYME+SYP"
    }
  },
  {
    "title": "NEUROVIT DROP",
    "description": "Multivitamin Drops",
    "brand": "NEUROVIT",
    "companyName": "ELDER",
    "packageSize": "15ML",
    "mrp": 65,
    "inStockNumber": 16.75,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_neurovit-drop",
      "url": "https://via.placeholder.com/150?text=NEUROVIT+DROP"
    }
  },
  {
    "title": "COFRAJ (green)",
    "description": "Dextrometorfaon HBr IP 5 mg + Ammon. Clororu IP 50 mg + Bromhexina HCL IP 2 mg. + Mentol 2.5mg.",
    "brand": "COFRAJ",
    "companyName": "LEDERLE",
    "packageSize": "60ml",
    "mrp": 105,
    "inStockNumber": 17.50,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_cofraj-green",
      "url": "https://via.placeholder.com/150?text=COFRAJ+GREEN"
    }
  },
  {
    "title": "ORELED XT syp",
    "description": "Ferrous Ascorbate Folic Acid & Carbohydrates suspension",
    "brand": "ORELED XT",
    "companyName": "LEDERLE",
    "packageSize": "200ml",
    "mrp": 140,
    "inStockNumber": 31.85,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_oreled-xt-syp",
      "url": "https://via.placeholder.com/150?text=ORELED+XT+SYP"
    }
  },
  {
    "title": "TEFI-O dry syrup",
    "description": "Cefixime Oral Suspension I.P",
    "brand": "TEFI-O",
    "companyName": "LEDERLE",
    "packageSize": "40ml",
    "mrp": 54,
    "inStockNumber": 19.21,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_tefi-o-dry-syrup",
      "url": "https://via.placeholder.com/150?text=TEFI-O+DRY+SYRUP"
    }
  },
  {
    "title": "DIALEX-DC syp",
    "description": "Dextromethorphan Hydrobromide & Chlorpheniramine Maleate cough syp",
    "brand": "DIALEX-DC",
    "companyName": "Dr.REDDY",
    "packageSize": "100ml",
    "mrp": 130,
    "inStockNumber": 28.75,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_dialex-dc-syp",
      "url": "https://via.placeholder.com/150?text=DIALEX-DC+SYP"
    }
  },
  {
    "title": "PROTILED+DHA (tin pack)",
    "description": "Protin Powder with DHA (chocolate flavour)",
    "brand": "PROTILED+DHA",
    "companyName": "LEDERLE",
    "packageSize": "200g (tin pack)",
    "mrp": 476,
    "inStockNumber": 65.5,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_protiled-dha",
      "url": "https://via.placeholder.com/150?text=PROTILED+DHA"
    }
  },
   {
    "title": "EVILED 400 SOFTGEL (10*10)",
    "description": "Vitamin E Soft Gelatin Capsules",
    "brand": "EVILED 400",
    "companyName": "LEDERLE",
    "packageSize": "10*10",
    "mrp": 135,
    "inStockNumber": 28.75,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_eviled-400",
      "url": "https://via.placeholder.com/150?text=EVILED+400+SOFTGEL"
    }
  },
  {
    "title": "PROBIOTIC (10*1*10)",
    "description": "Prebiotic, Probiotic With Fungal Amylase Cap",
    "brand": "PROBIOTIC",
    "companyName": "ANTEX",
    "packageSize": "10*1*10",
    "mrp": 165,
    "inStockNumber": 28.21,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_probiotic",
      "url": "https://via.placeholder.com/150?text=PROBIOTIC"
    }
  },
  {
    "title": "SHENOCAL 500 (20*15)",
    "description": "Calcium & Vitamin D3 Tablets IP",
    "brand": "SHENOCAL 500",
    "companyName": "LEDERLE",
    "packageSize": "20*15",
    "mrp": 82,
    "inStockNumber": 10.75,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_shenocal-500",
      "url": "https://via.placeholder.com/150?text=SHENOCAL+500"
    }
  },
  {
    "title": "CIPCAL HD (20*15)",
    "description": "Calcium & Vitamin D3 Tablets IP",
    "brand": "CIPCAL HD",
    "companyName": "CIPLA",
    "packageSize": "20*15",
    "mrp": 104,
    "inStockNumber": 18.95,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_cipcal-hd",
      "url": "https://via.placeholder.com/150?text=CIPCAL+HD"
    }
  },
  {
    "title": "CITLED TAB (14*5*10)",
    "description": "Cetirizine Hydrochloride Tablets I.P",
    "brand": "CITLED",
    "companyName": "LEDERLE",
    "packageSize": "14*5*10",
    "mrp": 18,
    "inStockNumber": 2.15,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_citled-tab",
      "url": "https://via.placeholder.com/150?text=CITLED+TAB"
    }
  },
  {
    "title": "C ZIN TAB (50*10)",
    "description": "Cetirizine Hydrochloride Tablets I.P",
    "brand": "C ZIN",
    "companyName": "GPP",
    "packageSize": "50*10",
    "mrp": 20,
    "inStockNumber": 2.25,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_c-zin-tab",
      "url": "https://via.placeholder.com/150?text=C+ZIN+TAB"
    }
  },
  {
    "title": "CEFALBLAST 500 (10*1*10)",
    "description": "Cefuroxime Axetil Tab IP",
    "brand": "CEFALBLAST 500",
    "companyName": "MANKIND",
    "packageSize": "10*1*10",
    "mrp": 576,
    "inStockNumber": 156,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_cefalblast-500",
      "url": "https://via.placeholder.com/150?text=CEFALBLAST+500"
    }
  },
  {
    "title": "MICROPOD 200 (10*1*10)",
    "description": "Cefpodoxime Proxetil Tab IP",
    "brand": "MICROPOD 200",
    "companyName": "MICRO",
    "packageSize": "10*1*10",
    "mrp": 276,
    "inStockNumber": 74,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_micropod-200",
      "url": "https://via.placeholder.com/150?text=MICROPOD+200"
    }
  },
  {
    "title": "PREGACIIP M (10*10)",
    "description": "Pregabalin and Methylcobalamin Capsules IP",
    "brand": "PREGACIIP M",
    "companyName": "CIPLA",
    "packageSize": "10*10",
    "mrp": 179,
    "inStockNumber": 49.75,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_pregaciip-m",
      "url": "https://via.placeholder.com/150?text=PREGACIIP+M"
    }
  },
  {
    "title": "GEMSOLINE D3 60K (20*1*4)",
    "description": "Cholecalciferol Capsule USP",
    "brand": "GEMSOLINE D3 60K",
    "companyName": "MEDLEY",
    "packageSize": "20*1*4",
    "mrp": 30,
    "inStockNumber": 21.75,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_gemsoline-d3-60k",
      "url": "https://via.placeholder.com/150?text=GEMSOLINE+D3+60K"
    }
  },
  {
    "title": "FLUMONT LC TAB (10*2*15)",
    "description": "Montelukast sodium & Levocetirizine Hydrochloride syp",
    "brand": "FLUMONT LC",
    "companyName": "ARISTO",
    "packageSize": "10*2*15",
    "mrp": 270,
    "inStockNumber": 28.28,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_flumont-lc-tab",
      "url": "https://via.placeholder.com/150?text=FLUMONT+LC+TAB"
    }
  },
  {
    "title": "MONOLED LC TAB (10*1*10)",
    "description": "Montelukast sodium & Levocetirizine Hydrochloride syp",
    "brand": "MONOLED LC",
    "companyName": "LEDERLE",
    "packageSize": "10*1*10",
    "mrp": 195,
    "inStockNumber": 17.45,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_monoled-lc-tab",
      "url": "https://via.placeholder.com/150?text=MONOLED+LC+TAB"
    }
  },
  {
    "title": "Ofloed tab",
    "description": "Ofloxacin tab I.P",
    "brand": "Ofloed",
    "companyName": "LEDERLE",
    "packageSize": "10*10",
    "mrp": 82,
    "inStockNumber": 13.75,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_ofloed-tab",
      "url": "https://via.placeholder.com/150?text=OFLOED+TAB"
    }
  },
  {
    "title": "Qmax 200 tab",
    "description": "Ofloxacin tab I.P",
    "brand": "Qmax 200",
    "companyName": "ALKEM",
    "packageSize": "10*10",
    "mrp": 86,
    "inStockNumber": 22.36,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_qmax-200-tab",
      "url": "https://via.placeholder.com/150?text=QMAX+200+TAB"
    }
  },
  {
    "title": "ULTRICH cap (20*1*10)",
    "description": "Multivitamin & Multimineral Soft Gelatin cap",
    "brand": "ULTRICH",
    "companyName": "LEDERLE",
    "packageSize": "20*1*10",
    "mrp": 185,
    "inStockNumber": 19.89,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_ultrich-cap",
      "url": "https://via.placeholder.com/150?text=ULTRICH+CAP"
    }
  },
  {
    "title": "FUL-AID GOLD CAP (10*1*10)",
    "description": "Ginseng with Multivitamin & Minerals cap",
    "brand": "FUL-AID GOLD",
    "companyName": "MANKIND",
    "packageSize": "10*1*10",
    "mrp": 109,
    "inStockNumber": 27.45,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_ful-aid-gold-cap",
      "url": "https://via.placeholder.com/150?text=FUL-AID+GOLD+CAP"
    }
  },
  {
    "title": "DUASAFE 625 TAB (10*1*10)",
    "description": "Amoxicillin & Potassium Clavulanate oral suspension I.P",
    "brand": "DUASAFE 625",
    "companyName": "AJANTA",
    "packageSize": "10*1*10",
    "mrp": 204,
    "inStockNumber": 65,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_duasafe-625-tab",
      "url": "https://via.placeholder.com/150?text=DUASAFE+625+TAB"
    }
  },
  {
    "title": "MOKCAN CV625 (10*1*10)",
    "description": "Amoxicillin & Potassium Clavulanate oral suspension I.P",
    "brand": "MOKCAN CV625",
    "companyName": "CADILA",
    "packageSize": "10*1*10",
    "mrp": 204,
    "inStockNumber": 63,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_mokcan-cv625",
      "url": "https://via.placeholder.com/150?text=MOKCAN+CV625"
    }
  },
  {
    "title": "MAHAMOX CV625 (10*1*10)",
    "description": "Amoxicillin & Potassium Clavulanate oral suspension I.P",
    "brand": "MAHAMOX CV625",
    "companyName": "MANKIND",
    "packageSize": "10*1*10",
    "mrp": 204,
    "inStockNumber": 70,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_mahamox-cv625",
      "url": "https://via.placeholder.com/150?text=MAHAMOX+CV625"
    }
  },
  {
    "title": "AMOXYCLAV 625 (5*3*10)",
    "description": "Amoxicillin & Potassium Clavulanate oral suspension I.P",
    "brand": "AMOXYCLAV 625",
    "companyName": "ABBOTT",
    "packageSize": "5*3*10",
    "mrp": 204,
    "inStockNumber": 84,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_amoxyclav-625",
      "url": "https://via.placeholder.com/150?text=AMOXYCLAV+625"
    }
  },
  {
    "title": "AUGULAB-625(10*1*10)",
    "description": "Amoxicillin & Potassium Clavulanate oral suspension I.P",
    "brand": "AUGULAB-625",
    "companyName": "LABORATE",
    "packageSize": "10*1*10",
    "mrp": 204,
    "inStockNumber": 66,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_augulab-625",
      "url": "https://via.placeholder.com/150?text=AUGULAB+625"
    }
  },
  {
    "title": "FLANCE 150 TAB(50*1*1)",
    "description": "Fluconazole tablet IP 150 mg",
    "brand": "FLANCE 150",
    "companyName": "GALPHA",
    "packageSize": "50*1*1",
    "mrp": 13.5,
    "inStockNumber": 6.75,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_flance-150-tab",
      "url": "https://via.placeholder.com/150?text=FLANCE+150+TAB"
    }
  },
  {
    "title": "FLUKA 150TAB(50*1*1)",
    "description": "Fluconazole tablet IP 150 mg",
    "brand": "FLUKA 150",
    "companyName": "CIPLA",
    "packageSize": "50*1*1",
    "mrp": 13.5,
    "inStockNumber": 7.12,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_fluka-150tab",
      "url": "https://via.placeholder.com/150?text=FLUKA+150+TAB"
    }
  },
  {
    "title": "OMEE D CAP (20*20)",
    "description": "Omeprazole IP 20mg + Domperidone IP 10mg",
    "brand": "OMEE D",
    "companyName": "ALKEM",
    "packageSize": "20*20",
    "mrp": 220,
    "inStockNumber": 31.25,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_omee-d-cap",
      "url": "https://via.placeholder.com/150?text=OMEE+D+CAP"
    }
  },
  {
    "title": "OZOLE D CAP (20*15)",
    "description": "Omeprazole IP 20mg + Domperidone IP 10mg",
    "brand": "OZOLE D",
    "companyName": "ABBOTT",
    "packageSize": "20*15",
    "mrp": 185,
    "inStockNumber": 18.44,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_ozole-d-cap",
      "url": "https://via.placeholder.com/150?text=OZOLE+D+CAP"
    }
  },
  {
    "title": "OMPRALLED D CAP (20*15)",
    "description": "Omeprazole IP 20mg + Domperidone IP 10mg",
    "brand": "OMPRALLED D",
    "companyName": "LEDERLE",
    "packageSize": "20*15",
    "mrp": 103,
    "inStockNumber": 17.45,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_ompralled-d-cap",
      "url": "https://via.placeholder.com/150?text=OMPRALLED+D+CAP"
    }
  },
  {
    "title": "OMPRALLED CAP (20*15)",
    "description": "Omeprazole cap IP",
    "brand": "OMPRALLED",
    "companyName": "LEDERLE",
    "packageSize": "20*15",
    "mrp": 48,
    "inStockNumber": 17.45,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_ompralled-cap",
      "url": "https://via.placeholder.com/150?text=OMPRALLED+CAP"
    }
  },
  {
    "title": "DOX LED LV TAB (10*2*8)",
    "description": "Doxycycline & Lactic Acid Bacillus tab",
    "brand": "DOX LED LV",
    "companyName": "LEDERLE",
    "packageSize": "10*2*8",
    "mrp": 50,
    "inStockNumber": 15.32,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_dox-led-lv-tab",
      "url": "https://via.placeholder.com/150?text=DOX+LED+LV+TAB"
    }
  },
  {
    "title": "AB KILL tab",
    "description": "Albendazole tab IP",
    "brand": "AB KILL",
    "companyName": "LEDERLE",
    "packageSize": "1*10",
    "mrp": 90,
    "inStockNumber": 25.85,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_ab-kill-tab",
      "url": "https://via.placeholder.com/150?text=AB+KILL+TAB"
    }
  },
  {
    "title": "LQUIN 500 (10*10)",
    "description": "levofloxacin tablets ip 500 mg",
    "brand": "LQUIN 500",
    "companyName": "CIPLA",
    "packageSize": "10*10",
    "mrp": 100,
    "inStockNumber": 53.12,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_lquin-500",
      "url": "https://via.placeholder.com/150?text=LQUIN+500"
    }
  },
  {
    "title": "LYCOPHER RED CAP (10*1*10)",
    "description": "LYCOPENE, ZINC, SELENIUM, VITAMIN A, C & GINSENG CAPSULE",
    "brand": "LYCOPHER RED",
    "companyName": "LEDERLE",
    "packageSize": "10*1*10",
    "mrp": 205,
    "inStockNumber": 14.25,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_lycopher-red-cap",
      "url": "https://via.placeholder.com/150?text=LYCOPHER+RED+CAP"
    }
  },
  {
    "title": "GUTBLISS (10*1*10)",
    "description": "PRE AND PROBIOTIC CAP",
    "brand": "GUTBLISS",
    "companyName": "ARISTO",
    "packageSize": "10*1*10",
    "mrp": 163,
    "inStockNumber": 29.45,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_gutbliss",
      "url": "https://via.placeholder.com/150?text=GUTBLISS"
    }
  },
   {
    "title": "DERMITOR-KT5 GEL (15g)",
    "description": "Ketoconazole, Neomycin, Iodochlorhydroxyquinoline, Tolnaftate & Clobetasol Propionate cream",
    "brand": "DERMITOR-KT5",
    "companyName": "TORQUE",
    "packageSize": "15g",
    "mrp": 110,
    "inStockNumber": 18.75,
    "isAvailable": true,
    "image": {
      "public_id": "dummy_public_id_dermitor-kt5-gel",
      "url": "https://via.placeholder.com/150?text=DERMITOR-KT5+GEL"
    }
  }
];
export default medicines;

