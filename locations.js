// Import the fs module to work with the file system
const fs = require("fs");

// Input array of objects
const locations = [
    {
        country: "Wales",
        county: "Dyfed",
        city: "Aberaeron",
    },
    {
        country: "Wales",
        county: "Mid Glamorgan",
        city: "Aberdare",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Aberdovey",
    },
    {
        country: "Wales",
        county: "Gwent",
        city: "Abergavenny",
    },
    {
        country: "Wales",
        county: "Clwyd",
        city: "Abergele",
    },
    {
        country: "Wales",
        county: "Gwent",
        city: "Abertillery",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Aberystwyth",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Amlwch",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Ammanford",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Arthog",
    },
    {
        country: "Wales",
        county: "Clwyd",
        city: "Bagillt",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Bala",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Bangor",
    },
    {
        country: "Wales",
        county: "Mid Glamorgan",
        city: "Bargoed",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Barmouth",
    },
    {
        country: "Wales",
        county: "South Glamorgan",
        city: "Barry",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Beaumaris",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Betws-Y-Coed",
    },
    {
        country: "Wales",
        county: "Gwent",
        city: "Blackwood",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Blaenau Ffestiniog",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Bodorgan",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Boncath",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Borth",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Bow Street",
    },
    {
        country: "Wales",
        county: "Powys",
        city: "Brecon",
    },
    {
        country: "Wales",
        county: "Mid Glamorgan",
        city: "Bridgend",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Brynteg",
    },
    {
        country: "Wales",
        county: "Clwyd",
        city: "Buckley",
    },
    {
        country: "Wales",
        county: "Powys",
        city: "Builth Wells",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Burry Port",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Caernarfon",
    },
    {
        country: "Wales",
        county: "Mid Glamorgan",
        city: "Caerphilly",
    },
    {
        country: "Wales",
        county: "Powys",
        city: "Caersws",
    },
    {
        country: "Wales",
        county: "Gwent",
        city: "Caldicot",
    },
    {
        country: "Wales",
        county: "South Glamorgan",
        city: "Cardiff",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Cardigan",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Carmarthen",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Cemaes Bay",
    },
    {
        country: "Wales",
        county: "Gwent",
        city: "Chepstow",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Clarbeston Road",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Clynderwen",
    },
    {
        country: "Wales",
        county: "Clwyd",
        city: "Colwyn Bay",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Conwy",
    },
    {
        country: "Wales",
        county: "Clwyd",
        city: "Corwen",
    },
    {
        country: "Wales",
        county: "South Glamorgan",
        city: "Cowbridge",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Criccieth",
    },
    {
        country: "Wales",
        county: "Powys",
        city: "Crickhowell",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Crymych",
    },
    {
        country: "Wales",
        county: "Gwent",
        city: "Cwmbran",
    },
    {
        country: "Wales",
        county: "Clwyd",
        city: "Deeside",
    },
    {
        country: "Wales",
        county: "Clwyd",
        city: "Denbigh",
    },
    {
        country: "Wales",
        county: "South Glamorgan",
        city: "Dinas Powys",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Dolgellau",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Dolwyddelan",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Dulas",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Dyffryn Ardudwy",
    },
    {
        country: "Wales",
        county: "Gwent",
        city: "Ebbw Vale",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Fairbourne",
    },
    {
        country: "Wales",
        county: "Mid Glamorgan",
        city: "Ferndale",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Ferryside",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Fishguard",
    },
    {
        country: "Wales",
        county: "Clwyd",
        city: "Flint",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Gaerwen",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Garndolbenmaen",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Glogue",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Goodwick",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Harlech",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Haverfordwest",
    },
    {
        country: "Wales",
        county: "Mid Glamorgan",
        city: "Hengoed",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Holyhead",
    },
    {
        country: "Wales",
        county: "Clwyd",
        city: "Holywell",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Kidwelly",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Kilgetty",
    },
    {
        country: "Wales",
        county: "Powys",
        city: "Knighton",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Lampeter",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Llanarth",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Llanbedr",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Llanbedrgoch",
    },
    {
        country: "Wales",
        county: "Powys",
        city: "Llanbrynmair",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Llandeilo",
    },
    {
        country: "Wales",
        county: "Powys",
        city: "Llandinam",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Llandovery",
    },
    {
        country: "Wales",
        county: "Powys",
        city: "Llandrindod Wells",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Llandudno",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Llandudno Junction",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Llandysul",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Llanelli",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Llanerchymedd",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Llanfairfechan",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Llanfairpwllgwyngyll",
    },
    {
        country: "Wales",
        county: "Powys",
        city: "Llanfechain",
    },
    {
        country: "Wales",
        county: "Powys",
        city: "Llanfyllin",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Llanfyrnach",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Llangadog",
    },
    {
        country: "Wales",
        county: "Powys",
        city: "Llangammarch Wells",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Llangefni",
    },
    {
        country: "Wales",
        county: "Clwyd",
        city: "Llangollen",
    },
    {
        country: "Wales",
        county: "Powys",
        city: "Llanidloes",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Llanon",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Llanrhystud",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Llanrwst",
    },
    {
        country: "Wales",
        county: "Powys",
        city: "Llansantffraid",
    },
    {
        country: "Wales",
        county: "South Glamorgan",
        city: "Llantwit Major",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Llanwrda",
    },
    {
        country: "Wales",
        county: "Powys",
        city: "Llanwrtyd Wells",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Llanybydder",
    },
    {
        country: "Wales",
        county: "Powys",
        city: "Llanymynech",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Llwyngwril",
    },
    {
        country: "Wales",
        county: "Powys",
        city: "Machynlleth",
    },
    {
        country: "Wales",
        county: "Mid Glamorgan",
        city: "Maesteg",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Marianglas",
    },
    {
        country: "Wales",
        county: "Powys",
        city: "Meifod",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Menai Bridge",
    },
    {
        country: "Wales",
        county: "Mid Glamorgan",
        city: "Merthyr Tydfil",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Milford Haven",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Moelfre",
    },
    {
        country: "Wales",
        county: "Clwyd",
        city: "Mold",
    },
    {
        country: "Wales",
        county: "Gwent",
        city: "Monmouth",
    },
    {
        country: "Wales",
        county: "Powys",
        city: "Montgomery",
    },
    {
        country: "Wales",
        county: "Mid Glamorgan",
        city: "Mountain Ash",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Narberth",
    },
    {
        country: "Wales",
        county: "West Glamorgan",
        city: "Neath",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "New Quay",
    },
    {
        country: "Wales",
        county: "Gwent",
        city: "New Tredegar",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Newcastle Emlyn",
    },
    {
        country: "Wales",
        county: "Gwent",
        city: "Newport",
    },
    {
        country: "Wales",
        county: "Powys",
        city: "Newtown",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Pembroke Dock",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Pembroke",
    },
    {
        country: "Wales",
        county: "South Glamorgan",
        city: "Penarth",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Pencader",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Penmaenmawr",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Penrhyndeudraeth",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Pentraeth",
    },
    {
        country: "Wales",
        county: "Mid Glamorgan",
        city: "Pentre",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Penysarn",
    },
    {
        country: "Wales",
        county: "Mid Glamorgan",
        city: "Pontyclun",
    },
    {
        country: "Wales",
        county: "Gwent",
        city: "Pontypool",
    },
    {
        country: "Wales",
        county: "Mid Glamorgan",
        city: "Pontypridd",
    },
    {
        country: "Wales",
        county: "West Glamorgan",
        city: "Port Talbot",
    },
    {
        country: "Wales",
        county: "Mid Glamorgan",
        city: "Porth",
    },
    {
        country: "Wales",
        county: "Mid Glamorgan",
        city: "Porthcawl",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Porthmadog",
    },
    {
        country: "Wales",
        county: "Clwyd",
        city: "Prestatyn",
    },
    {
        country: "Wales",
        county: "Powys",
        city: "Presteigne",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Pwllheli",
    },
    {
        country: "Wales",
        county: "Powys",
        city: "Rhayader",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Rhosgoch",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Rhosneigr",
    },
    {
        country: "Wales",
        county: "Clwyd",
        city: "Rhyl",
    },
    {
        country: "Wales",
        county: "Clwyd",
        city: "Ruthin",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Saundersfoot",
    },
    {
        country: "Wales",
        county: "Clwyd",
        city: "St. Asaph",
    },
    {
        country: "Wales",
        county: "West Glamorgan",
        city: "Swansea",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Talsarnau",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Talybont",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Tenby",
    },
    {
        country: "Wales",
        county: "Mid Glamorgan",
        city: "Tonypandy",
    },
    {
        country: "Wales",
        county: "Gwent",
        city: "Tredegar",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Trefriw",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Tregaron",
    },
    {
        country: "Wales",
        county: "Mid Glamorgan",
        city: "Treharris",
    },
    {
        country: "Wales",
        county: "Mid Glamorgan",
        city: "Treorchy",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Ty Croes",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Tyn-Y-Gongl",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Tywyn",
    },
    {
        country: "Wales",
        county: "Gwent",
        city: "Usk",
    },
    {
        country: "Wales",
        county: "Powys",
        city: "Welshpool",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Whitland",
    },
    {
        country: "Wales",
        county: "Clwyd",
        city: "Wrexham",
    },
    {
        country: "Wales",
        county: "Gwynedd",
        city: "Y Felinheli",
    },
    {
        country: "Wales",
        county: "Dyfed",
        city: "Ystrad Meurig",
    },
    {
        country: "USA",
        state: "Tennessee",
        city: "Nashville",
    },
    {
        country: "USA",
        state: "Texas",
        city: "Houston",
    },
    {
        country: "USA",
        state: "Texas",
        city: "Dallas",
    },
    {
        country: "USA",
        state: "Illinois",
        city: "Chicago",
    },
    {
        country: "USA",
        state: "New York",
        city: "NYC",
    },
    {
        country: "USA",
        city: "USA",
    },
    {
        country: "Switzerland",
        city: "Zurich",
    },
    {
        country: "Scotland",
        county: "Aberdeenshire",
        city: "Aberdeen",
    },
    {
        country: "Scotland",
        county: "Perthshire",
        city: "Aberfeldy",
    },
    {
        country: "Scotland",
        county: "Banffshire",
        city: "Aberlour",
    },
    {
        country: "Scotland",
        county: "Aberdeenshire",
        city: "Aboyne",
    },
    {
        country: "Scotland",
        county: "Argyll",
        city: "Acharacle",
    },
    {
        country: "Scotland",
        county: "Ross-Shire",
        city: "Achnasheen",
    },
    {
        country: "Scotland",
        county: "Lanarkshire",
        city: "Airdrie",
    },
    {
        country: "Scotland",
        county: "Dunbartonshire",
        city: "Alexandria, Dunbartonshire",
    },
    {
        country: "Scotland",
        county: "Aberdeenshire",
        city: "Alford, Aberdeenshire",
    },
    {
        country: "Scotland",
        county: "Clackmannanshire",
        city: "Alloa",
    },
    {
        country: "Scotland",
        county: "Ross-Shire",
        city: "Alness",
    },
    {
        country: "Scotland",
        county: "Clackmannanshire",
        city: "Alva",
    },
    {
        country: "Scotland",
        county: "Dumfriesshire",
        city: "Annan",
    },
    {
        country: "Scotland",
        county: "Fife",
        city: "Anstruther",
    },
    {
        country: "Scotland",
        county: "Argyll",
        city: "Appin",
    },
    {
        country: "Scotland",
        county: "Angus",
        city: "Arbroath",
    },
    {
        country: "Scotland",
        county: "Sutherland",
        city: "Ardgay",
    },
    {
        country: "Scotland",
        county: "Ayrshire",
        city: "Ardrossan",
    },
    {
        country: "Scotland",
        county: "Inverness-Shire",
        city: "Arisaig",
    },
    {
        country: "Scotland",
        county: "Dunbartonshire",
        city: "Arrochar",
    },
    {
        country: "Scotland",
        county: "Perthshire",
        city: "Auchterarder",
    },
    {
        country: "Scotland",
        county: "Inverness-Shire",
        city: "Aviemore",
    },
    {
        country: "Scotland",
        county: "Ross-Shire",
        city: "Avoch",
    },
    {
        country: "Scotland",
        county: "Ayrshire",
        city: "Ayr, Ayrshire",
    },
    {
        country: "Scotland",
        county: "Midlothian",
        city: "Balerno",
    },
    {
        country: "Scotland",
        county: "Argyll",
        city: "Ballachulish",
    },
    {
        country: "Scotland",
        county: "Aberdeenshire",
        city: "Ballater",
    },
    {
        country: "Scotland",
        county: "Banffshire",
        city: "Ballindalloch",
    },
    {
        country: "Scotland",
        county: "Kincardineshire",
        city: "Banchory",
    },
    {
        country: "Scotland",
        county: "Banffshire",
        city: "Banff",
    },
    {
        country: "Scotland",
        county: "West Lothian",
        city: "Bathgate",
    },
    {
        country: "Scotland",
        county: "Inverness-Shire",
        city: "Beauly",
    },
    {
        country: "Scotland",
        county: "Ayrshire",
        city: "Beith",
    },
    {
        country: "Scotland",
        county: "Lanarkshire",
        city: "Bellshill, Lanarkshire",
    },
    {
        country: "Scotland",
        county: "Caithness",
        city: "Berriedale",
    },
    {
        country: "Scotland",
        county: "Lanarkshire",
        city: "Biggar, Lanarkshire",
    },
    {
        country: "Scotland",
        county: "Renfrewshire",
        city: "Bishopton, Renfrewshire",
    },
    {
        country: "Scotland",
        county: "Perthshire",
        city: "Blairgowrie",
    },
    {
        country: "Scotland",
        county: "Inverness-Shire",
        city: "Boat Of Garten",
    },
    {
        country: "Scotland",
        county: "West Lothian",
        city: "Bo'ness",
    },
    {
        country: "Scotland",
        county: "Stirlingshire",
        city: "Bonnybridge",
    },
    {
        country: "Scotland",
        county: "Midlothian",
        city: "Bonnyrigg",
    },
    {
        country: "Scotland",
        county: "Angus",
        city: "Brechin",
    },
    {
        country: "Scotland",
        county: "Argyll",
        city: "Bridge Of Orchy",
    },
    {
        country: "Scotland",
        county: "Renfrewshire",
        city: "Bridge Of Weir",
    },
    {
        country: "Scotland",
        county: "Sutherland",
        city: "Brora",
    },
    {
        country: "Scotland",
        county: "West Lothian",
        city: "Broxburn",
    },
    {
        country: "Scotland",
        county: "Banffshire",
        city: "Buckie",
    },
    {
        country: "Scotland",
        county: "Fife",
        city: "Burntisland",
    },
    {
        country: "Scotland",
        county: "Argyll",
        city: "Cairndow",
    },
    {
        country: "Scotland",
        county: "Perthshire",
        city: "Callander",
    },
    {
        country: "Scotland",
        county: "Argyll",
        city: "Campbeltown",
    },
    {
        country: "Scotland",
        county: "Dumfriesshire",
        city: "Canonbie",
    },
    {
        country: "Scotland",
        county: "Lanarkshire",
        city: "Carluke",
    },
    {
        country: "Scotland",
        county: "Angus",
        city: "Carnoustie",
    },
    {
        country: "Scotland",
        county: "Inverness-Shire",
        city: "Carrbridge",
    },
    {
        country: "Scotland",
        county: "Kirkcudbrightshire",
        city: "Castle Douglas",
    },
    {
        country: "Scotland",
        county: "Clackmannanshire",
        city: "Clackmannan",
    },
    {
        country: "Scotland",
        county: "Dunbartonshire",
        city: "Clydebank",
    },
    {
        country: "Scotland",
        county: "Lanarkshire",
        city: "Coatbridge",
    },
    {
        country: "Scotland",
        county: "Berwickshire",
        city: "Cockburnspath",
    },
    {
        country: "Scotland",
        county: "Berwickshire",
        city: "Coldstream",
    },
    {
        country: "Scotland",
        county: "Argyll",
        city: "Colintraive",
    },
    {
        country: "Scotland",
        county: "Inverness-Shire",
        city: "Corrour",
    },
    {
        country: "Scotland",
        county: "Fife",
        city: "Cowdenbeath",
    },
    {
        country: "Scotland",
        county: "Perthshire",
        city: "Crianlarich",
    },
    {
        country: "Scotland",
        county: "Perthshire",
        city: "Crieff",
    },
    {
        country: "Scotland",
        county: "Ross-Shire",
        city: "Cromarty",
    },
    {
        country: "Scotland",
        county: "Ayrshire",
        city: "Cumnock",
    },
    {
        country: "Scotland",
        county: "Fife",
        city: "Cupar",
    },
    {
        country: "Scotland",
        county: "Midlothian",
        city: "Currie",
    },
    {
        country: "Scotland",
        county: "Kirkcudbrightshire",
        city: "Dalbeattie",
    },
    {
        country: "Scotland",
        county: "Midlothian",
        city: "Dalkeith",
    },
    {
        country: "Scotland",
        county: "Argyll",
        city: "Dalmally",
    },
    {
        country: "Scotland",
        county: "Ayrshire",
        city: "Dalry, Ayrshire",
    },
    {
        country: "Scotland",
        county: "Inverness-Shire",
        city: "Dalwhinnie",
    },
    {
        country: "Scotland",
        county: "Ayrshire",
        city: "Darvel",
    },
    {
        country: "Scotland",
        county: "Stirlingshire",
        city: "Denny",
    },
    {
        country: "Scotland",
        county: "Ross-Shire",
        city: "Dingwall",
    },
    {
        country: "Scotland",
        county: "Clackmannanshire",
        city: "Dollar",
    },
    {
        country: "Scotland",
        county: "Sutherland",
        city: "Dornoch",
    },
    {
        country: "Scotland",
        county: "Perthshire",
        city: "Doune, Perthshire",
    },
    {
        country: "Scotland",
        county: "Dunbartonshire",
        city: "Dumbarton",
    },
    {
        country: "Scotland",
        county: "Dumfriesshire",
        city: "Dumfries, Dumfriesshire",
    },
    {
        country: "Scotland",
        county: "East Lothian",
        city: "Dunbar",
    },
    {
        country: "Scotland",
        county: "Caithness",
        city: "Dunbeath",
    },
    {
        country: "Scotland",
        county: "Perthshire",
        city: "Dunblane",
    },
    {
        country: "Scotland",
        county: "Angus",
        city: "Dundee",
    },
    {
        country: "Scotland",
        county: "Fife",
        city: "Dunfermline",
    },
    {
        country: "Scotland",
        county: "Perthshire",
        city: "Dunkeld",
    },
    {
        country: "Scotland",
        county: "Argyll",
        city: "Dunoon",
    },
    {
        country: "Scotland",
        county: "Berwickshire",
        city: "Duns",
    },
    {
        country: "Scotland",
        county: "Berwickshire",
        city: "Earlston, Berwickshire",
    },
    {
        country: "Scotland",
        county: "East Lothian",
        city: "East Linton",
    },
    {
        country: "Scotland",
        county: "Midlothian",
        city: "Edinburgh",
    },
    {
        country: "Scotland",
        county: "Morayshire",
        city: "Elgin",
    },
    {
        country: "Scotland",
        county: "Aberdeenshire",
        city: "Ellon",
    },
    {
        country: "Scotland",
        county: "Renfrewshire",
        city: "Erskine",
    },
    {
        country: "Scotland",
        county: "Berwickshire",
        city: "Eyemouth",
    },
    {
        country: "Scotland",
        county: "Stirlingshire",
        city: "Falkirk",
    },
    {
        country: "Scotland",
        county: "Morayshire",
        city: "Fochabers",
    },
    {
        country: "Scotland",
        county: "Angus",
        city: "Forfar",
    },
    {
        country: "Scotland",
        county: "Morayshire",
        city: "Forres, Morayshire",
    },
    {
        country: "Scotland",
        county: "Sutherland",
        city: "Forsinard",
    },
    {
        country: "Scotland",
        county: "Inverness-Shire",
        city: "Fort Augustus",
    },
    {
        country: "Scotland",
        county: "Inverness-Shire",
        city: "Fort William",
    },
    {
        country: "Scotland",
        county: "Ross-Shire",
        city: "Fortrose",
    },
    {
        country: "Scotland",
        county: "Aberdeenshire",
        city: "Fraserburgh",
    },
    {
        country: "Scotland",
        county: "Ross-Shire",
        city: "Gairloch",
    },
    {
        country: "Scotland",
        county: "Selkirkshire",
        city: "Galashiels",
    },
    {
        country: "Scotland",
        county: "Ayrshire",
        city: "Galston",
    },
    {
        country: "Scotland",
        county: "Ross-Shire",
        city: "Garve",
    },
    {
        country: "Scotland",
        county: "Ayrshire",
        city: "Girvan",
    },
    {
        country: "Scotland",
        county: "Lanarkshire",
        city: "Glasgow",
    },
    {
        country: "Scotland",
        county: "Inverness-Shire",
        city: "Glenfinnan",
    },
    {
        country: "Scotland",
        county: "Fife",
        city: "Glenrothes",
    },
    {
        country: "Scotland",
        county: "Sutherland",
        city: "Golspie",
    },
    {
        country: "Scotland",
        county: "Berwickshire",
        city: "Gordon, Berwickshire",
    },
    {
        country: "Scotland",
        county: "Midlothian",
        city: "Gorebridge",
    },
    {
        country: "Scotland",
        county: "Renfrewshire",
        city: "Gourock",
    },
    {
        country: "Scotland",
        county: "Stirlingshire",
        city: "Grangemouth",
    },
    {
        country: "Scotland",
        county: "Morayshire",
        city: "Grantown-On-Spey",
    },
    {
        country: "Scotland",
        county: "Renfrewshire",
        city: "Greenock",
    },
    {
        country: "Scotland",
        county: "Dumfriesshire",
        city: "Gretna",
    },
    {
        country: "Scotland",
        county: "East Lothian",
        city: "Gullane",
    },
    {
        country: "Scotland",
        county: "East Lothian",
        city: "Haddington, East Lothian",
    },
    {
        country: "Scotland",
        county: "Caithness",
        city: "Halkirk",
    },
    {
        country: "Scotland",
        county: "Lanarkshire",
        city: "Hamilton, Lanarkshire",
    },
    {
        country: "Scotland",
        county: "Roxburghshire",
        city: "Hawick",
    },
    {
        country: "Scotland",
        county: "Dunbartonshire",
        city: "Helensburgh",
    },
    {
        country: "Scotland",
        county: "Sutherland",
        city: "Helmsdale",
    },
    {
        country: "Scotland",
        county: "Midlothian",
        city: "Heriot",
    },
    {
        country: "Scotland",
        county: "East Lothian",
        city: "Humbie",
    },
    {
        country: "Scotland",
        county: "Aberdeenshire",
        city: "Huntly",
    },
    {
        country: "Scotland",
        county: "Peeblesshire",
        city: "Innerleithen",
    },
    {
        country: "Scotland",
        county: "Aberdeenshire",
        city: "Insch",
    },
    {
        country: "Scotland",
        county: "Argyll",
        city: "Inveraray",
    },
    {
        country: "Scotland",
        county: "Inverness-Shire",
        city: "Invergarry",
    },
    {
        country: "Scotland",
        county: "Ross-Shire",
        city: "Invergordon",
    },
    {
        country: "Scotland",
        county: "Fife",
        city: "Inverkeithing",
    },
    {
        country: "Scotland",
        county: "Inverness-Shire",
        city: "Inverness",
    },
    {
        country: "Scotland",
        county: "Aberdeenshire",
        city: "Inverurie",
    },
    {
        country: "Scotland",
        county: "Ayrshire",
        city: "Irvine, Ayrshire",
    },
    {
        country: "Scotland",
        county: "Isle of Arran",
        city: "Isle Of Arran, Isle of Arran",
    },
    {
        country: "Scotland",
        county: "Isle of Barra",
        city: "Isle Of Barra, Isle of Barra",
    },
    {
        country: "Scotland",
        county: "Isle of Benbecula",
        city: "Isle Of Benbecula, Isle of Benbecula",
    },
    {
        country: "Scotland",
        county: "Isle of Bute",
        city: "Isle Of Bute, Isle of Bute",
    },
    {
        country: "Scotland",
        county: "Isle of Canna",
        city: "Isle Of Canna, Isle of Canna",
    },
    {
        country: "Scotland",
        county: "Isle of Coll",
        city: "Isle Of Coll, Isle of Coll",
    },
    {
        country: "Scotland",
        county: "Isle of Colonsay",
        city: "Isle Of Colonsay, Isle of Colonsay",
    },
    {
        country: "Scotland",
        county: "Isle of Cumbrae",
        city: "Isle Of Cumbrae, Isle of Cumbrae",
    },
    {
        country: "Scotland",
        county: "Isle of Eigg",
        city: "Isle Of Eigg, Isle of Eigg",
    },
    {
        country: "Scotland",
        county: "Isle of Gigha",
        city: "Isle Of Gigha, Isle of Gigha",
    },
    {
        country: "Scotland",
        county: "Isle of Harris",
        city: "Isle Of Harris, Isle of Harris",
    },
    {
        country: "Scotland",
        county: "Isle of Iona",
        city: "Isle Of Iona, Isle of Iona",
    },
    {
        country: "Scotland",
        county: "Isle of Islay",
        city: "Isle Of Islay, Isle of Islay",
    },
    {
        country: "Scotland",
        county: "Isle of Jura",
        city: "Isle Of Jura, Isle of Jura",
    },
    {
        country: "Scotland",
        county: "Isle of Lewis",
        city: "Isle Of Lewis, Isle of Lewis",
    },
    {
        country: "Scotland",
        county: "Isle of Mull",
        city: "Isle Of Mull, Isle of Mull",
    },
    {
        country: "Scotland",
        county: "Isle of North Uist",
        city: "Isle Of North Uist, Isle of North Uist",
    },
    {
        country: "Scotland",
        county: "Isle of Rum",
        city: "Isle Of Rum, Isle of Rum",
    },
    {
        country: "Scotland",
        county: "Isle of Scalpay",
        city: "Isle Of Scalpay, Isle of Scalpay",
    },
    {
        country: "Scotland",
        county: "Isle of Skye",
        city: "Isle Of Skye, Isle of Skye",
    },
    {
        country: "Scotland",
        county: "Isle of South Uist",
        city: "Isle Of South Uist, Isle of South Uist",
    },
    {
        country: "Scotland",
        county: "Isle of Tiree",
        city: "Isle Of Tiree, Isle of Tiree",
    },
    {
        country: "Scotland",
        county: "Roxburghshire",
        city: "Jedburgh",
    },
    {
        country: "Scotland",
        county: "Renfrewshire",
        city: "Johnstone",
    },
    {
        country: "Scotland",
        county: "Midlothian",
        city: "Juniper Green",
    },
    {
        country: "Scotland",
        county: "Banffshire",
        city: "Keith",
    },
    {
        country: "Scotland",
        county: "Roxburghshire",
        city: "Kelso",
    },
    {
        country: "Scotland",
        county: "Fife",
        city: "Kelty",
    },
    {
        country: "Scotland",
        county: "Ayrshire",
        city: "Kilbirnie",
    },
    {
        country: "Scotland",
        county: "Perthshire",
        city: "Killin",
    },
    {
        country: "Scotland",
        county: "Renfrewshire",
        city: "Kilmacolm",
    },
    {
        country: "Scotland",
        county: "Ayrshire",
        city: "Kilmarnock",
    },
    {
        country: "Scotland",
        county: "Ayrshire",
        city: "Kilwinning",
    },
    {
        country: "Scotland",
        county: "Sutherland",
        city: "Kinbrace",
    },
    {
        country: "Scotland",
        county: "Inverness-Shire",
        city: "Kingussie",
    },
    {
        country: "Scotland",
        county: "Argyll",
        city: "Kinlochleven",
    },
    {
        country: "Scotland",
        county: "Kinross-Shire",
        city: "Kinross",
    },
    {
        country: "Scotland",
        county: "Fife",
        city: "Kirkcaldy",
    },
    {
        country: "Scotland",
        county: "Kirkcudbrightshire",
        city: "Kirkcudbright",
    },
    {
        country: "Scotland",
        county: "West Lothian",
        city: "Kirkliston",
    },
    {
        country: "Scotland",
        county: "Midlothian",
        city: "Kirknewton, Midlothian",
    },
    {
        country: "Scotland",
        county: "Orkney",
        city: "Kirkwall",
    },
    {
        country: "Scotland",
        county: "Angus",
        city: "Kirriemuir",
    },
    {
        country: "Scotland",
        county: "Ross-Shire",
        city: "Kyle",
    },
    {
        country: "Scotland",
        county: "Sutherland",
        city: "Lairg",
    },
    {
        country: "Scotland",
        county: "Lanarkshire",
        city: "Lanark",
    },
    {
        country: "Scotland",
        county: "Dumfriesshire",
        city: "Langholm",
    },
    {
        country: "Scotland",
        county: "Stirlingshire",
        city: "Larbert",
    },
    {
        country: "Scotland",
        county: "Ayrshire",
        city: "Largs",
    },
    {
        country: "Scotland",
        county: "Lanarkshire",
        city: "Larkhall, Lanarkshire",
    },
    {
        country: "Scotland",
        county: "Midlothian",
        city: "Lasswade",
    },
    {
        country: "Scotland",
        county: "Caithness",
        city: "Latheron",
    },
    {
        country: "Scotland",
        county: "Berwickshire",
        city: "Lauder",
    },
    {
        country: "Scotland",
        county: "Kincardineshire",
        city: "Laurencekirk",
    },
    {
        country: "Scotland",
        county: "Fife",
        city: "Leven, Fife",
    },
    {
        country: "Scotland",
        county: "West Lothian",
        city: "Linlithgow",
    },
    {
        country: "Scotland",
        county: "West Lothian",
        city: "Livingston",
    },
    {
        country: "Scotland",
        county: "Midlothian",
        city: "Loanhead, Midlothian",
    },
    {
        country: "Scotland",
        county: "Inverness-Shire",
        city: "Lochailort",
    },
    {
        country: "Scotland",
        county: "Perthshire",
        city: "Lochearnhead",
    },
    {
        country: "Scotland",
        county: "Fife",
        city: "Lochgelly",
    },
    {
        country: "Scotland",
        county: "Argyll",
        city: "Lochgilphead",
    },
    {
        country: "Scotland",
        county: "Renfrewshire",
        city: "Lochwinnoch",
    },
    {
        country: "Scotland",
        county: "Dumfriesshire",
        city: "Lockerbie",
    },
    {
        country: "Scotland",
        county: "East Lothian",
        city: "Longniddry",
    },
    {
        country: "Scotland",
        county: "Morayshire",
        city: "Lossiemouth",
    },
    {
        country: "Scotland",
        county: "Caithness",
        city: "Lybster",
    },
    {
        country: "Scotland",
        county: "Banffshire",
        city: "Macduff",
    },
    {
        country: "Scotland",
        county: "Inverness-Shire",
        city: "Mallaig",
    },
    {
        country: "Scotland",
        county: "Ayrshire",
        city: "Mauchline",
    },
    {
        country: "Scotland",
        county: "Ayrshire",
        city: "Maybole",
    },
    {
        country: "Scotland",
        county: "Roxburghshire",
        city: "Melrose",
    },
    {
        country: "Scotland",
        county: "Clackmannanshire",
        city: "Menstrie",
    },
    {
        country: "Scotland",
        county: "Aberdeenshire",
        city: "Milltimber",
    },
    {
        country: "Scotland",
        county: "Dumfriesshire",
        city: "Moffat",
    },
    {
        country: "Scotland",
        county: "Angus",
        city: "Montrose",
    },
    {
        country: "Scotland",
        county: "Lanarkshire",
        city: "Motherwell",
    },
    {
        country: "Scotland",
        county: "Ross-Shire",
        city: "Muir Of Ord",
    },
    {
        country: "Scotland",
        county: "Ross-Shire",
        city: "Munlochy",
    },
    {
        country: "Scotland",
        county: "Midlothian",
        city: "Musselburgh",
    },
    {
        country: "Scotland",
        county: "Nairnshire",
        city: "Nairn",
    },
    {
        country: "Scotland",
        county: "Inverness-Shire",
        city: "Nethy Bridge",
    },
    {
        country: "Scotland",
        county: "Midlothian",
        city: "Newbridge, Midlothian",
    },
    {
        country: "Scotland",
        county: "Roxburghshire",
        city: "Newcastleton",
    },
    {
        country: "Scotland",
        county: "Ayrshire",
        city: "Newmilns",
    },
    {
        country: "Scotland",
        county: "Fife",
        city: "Newport-On-Tay",
    },
    {
        country: "Scotland",
        county: "Wigtownshire",
        city: "Newton Stewart",
    },
    {
        country: "Scotland",
        county: "Inverness-Shire",
        city: "Newtonmore",
    },
    {
        country: "Scotland",
        county: "East Lothian",
        city: "North Berwick",
    },
    {
        country: "Scotland",
        county: "Argyll",
        city: "Oban",
    },
    {
        country: "Scotland",
        county: "Orkney",
        city: "Orkney, Orkney",
    },
    {
        country: "Scotland",
        county: "Renfrewshire",
        city: "Paisley",
    },
    {
        country: "Scotland",
        county: "Midlothian",
        city: "Pathhead, Midlothian",
    },
    {
        country: "Scotland",
        county: "Peeblesshire",
        city: "Peebles",
    },
    {
        country: "Scotland",
        county: "Midlothian",
        city: "Penicuik",
    },
    {
        country: "Scotland",
        county: "Perthshire",
        city: "Perth, Perthshire",
    },
    {
        country: "Scotland",
        county: "Aberdeenshire",
        city: "Peterculter",
    },
    {
        country: "Scotland",
        county: "Aberdeenshire",
        city: "Peterhead",
    },
    {
        country: "Scotland",
        county: "Perthshire",
        city: "Pitlochry",
    },
    {
        country: "Scotland",
        county: "Ross-Shire",
        city: "Plockton",
    },
    {
        country: "Scotland",
        county: "Renfrewshire",
        city: "Port Glasgow",
    },
    {
        country: "Scotland",
        county: "Isle of Skye",
        city: "Portree",
    },
    {
        country: "Scotland",
        county: "East Lothian",
        city: "Prestonpans",
    },
    {
        country: "Scotland",
        county: "Ayrshire",
        city: "Prestwick, Ayrshire",
    },
    {
        country: "Scotland",
        county: "Renfrewshire",
        city: "Renfrew",
    },
    {
        country: "Scotland",
        county: "Sutherland",
        city: "Rogart",
    },
    {
        country: "Scotland",
        county: "Midlothian",
        city: "Rosewell",
    },
    {
        country: "Scotland",
        county: "Midlothian",
        city: "Roslin",
    },
    {
        country: "Scotland",
        county: "Inverness-Shire",
        city: "Roy Bridge",
    },
    {
        country: "Scotland",
        county: "Ayrshire",
        city: "Saltcoats, Ayrshire",
    },
    {
        country: "Scotland",
        county: "Dumfriesshire",
        city: "Sanquhar, Dumfriesshire",
    },
    {
        country: "Scotland",
        county: "Selkirkshire",
        city: "Selkirk",
    },
    {
        country: "Scotland",
        county: "Shetland Islands",
        city: "Shetland, Shetland Islands",
    },
    {
        country: "Scotland",
        county: "Lanarkshire",
        city: "Shotts",
    },
    {
        country: "Scotland",
        county: "Ayrshire",
        city: "Skelmorlie",
    },
    {
        country: "Scotland",
        county: "West Lothian",
        city: "South Queensferry",
    },
    {
        country: "Scotland",
        county: "Inverness-Shire",
        city: "Spean Bridge",
    },
    {
        country: "Scotland",
        county: "Fife",
        city: "St. Andrews, Fife",
    },
    {
        country: "Scotland",
        county: "Ayrshire",
        city: "Stevenston",
    },
    {
        country: "Scotland",
        county: "Stirlingshire",
        city: "Stirling",
    },
    {
        country: "Scotland",
        county: "Kincardineshire",
        city: "Stonehaven",
    },
    {
        country: "Scotland",
        county: "Isle of Lewis",
        city: "Stornoway",
    },
    {
        country: "Scotland",
        county: "Wigtownshire",
        city: "Stranraer",
    },
    {
        country: "Scotland",
        county: "Lanarkshire",
        city: "Strathaven",
    },
    {
        country: "Scotland",
        county: "Ross-Shire",
        city: "Strathcarron",
    },
    {
        country: "Scotland",
        county: "Aberdeenshire",
        city: "Strathdon",
    },
    {
        country: "Scotland",
        county: "Ross-Shire",
        city: "Strathpeffer",
    },
    {
        country: "Scotland",
        county: "Ross-Shire",
        city: "Strome Ferry",
    },
    {
        country: "Scotland",
        county: "Orkney",
        city: "Stromness",
    },
    {
        country: "Scotland",
        county: "Ross-Shire",
        city: "Tain, Ross-Shire",
    },
    {
        country: "Scotland",
        county: "Argyll",
        city: "Tarbert, Argyll",
    },
    {
        country: "Scotland",
        county: "Argyll",
        city: "Taynuilt",
    },
    {
        country: "Scotland",
        county: "Fife",
        city: "Tayport",
    },
    {
        country: "Scotland",
        county: "Dumfriesshire",
        city: "Thornhill, Dumfriesshire",
    },
    {
        country: "Scotland",
        county: "Caithness",
        city: "Thurso",
    },
    {
        country: "Scotland",
        county: "Argyll",
        city: "Tighnabruaich",
    },
    {
        country: "Scotland",
        county: "Clackmannanshire",
        city: "Tillicoultry",
    },
    {
        country: "Scotland",
        county: "East Lothian",
        city: "Tranent",
    },
    {
        country: "Scotland",
        county: "Ayrshire",
        city: "Troon, Ayrshire",
    },
    {
        country: "Scotland",
        county: "Aberdeenshire",
        city: "Turriff",
    },
    {
        country: "Scotland",
        county: "Ross-Shire",
        city: "Ullapool",
    },
    {
        country: "Scotland",
        county: "Peeblesshire",
        city: "Walkerburn",
    },
    {
        country: "Scotland",
        county: "Renfrewshire",
        city: "Wemyss Bay",
    },
    {
        country: "Scotland",
        county: "West Lothian",
        city: "West Calder",
    },
    {
        country: "Scotland",
        county: "Ayrshire",
        city: "West Kilbride, Ayrshire",
    },
    {
        country: "Scotland",
        county: "Peeblesshire",
        city: "West Linton",
    },
    {
        country: "Scotland",
        county: "Aberdeenshire",
        city: "Westhill, Aberdeenshire",
    },
    {
        country: "Scotland",
        county: "Caithness",
        city: "Wick, Caithness",
    },
    {
        country: "Scotland",
        county: "Lanarkshire",
        city: "Wishaw, Lanarkshire",
    },
    {
        region: "Northern Ireland",
        county: "Antrim",
        city: "Antrim",
    },
    {
        region: "Northern Ireland",
        county: "Armagh",
        city: "Armagh",
    },
    {
        region: "Northern Ireland",
        county: "Tyrone",
        city: "Augher",
    },
    {
        region: "Northern Ireland",
        county: "Tyrone",
        city: "Aughnacloy",
    },
    {
        region: "Northern Ireland",
        county: "Antrim",
        city: "Ballycastle",
    },
    {
        region: "Northern Ireland",
        county: "Antrim",
        city: "Ballyclare",
    },
    {
        region: "Northern Ireland",
        county: "Antrim",
        city: "Ballymena",
    },
    {
        region: "Northern Ireland",
        county: "Antrim",
        city: "Ballymoney",
    },
    {
        region: "Northern Ireland",
        county: "Down",
        city: "Ballynahinch",
    },
    {
        region: "Northern Ireland",
        county: "Down",
        city: "Banbridge",
    },
    {
        region: "Northern Ireland",
        county: "Down",
        city: "Bangor",
    },
    {
        region: "Northern Ireland",
        county: "Antrim",
        city: "Belfast",
    },
    {
        region: "Northern Ireland",
        county: "Antrim",
        city: "Bushmills",
    },
    {
        region: "Northern Ireland",
        county: "Tyrone",
        city: "Caledon",
    },
    {
        region: "Northern Ireland",
        county: "Antrim",
        city: "Carrickfergus",
    },
    {
        region: "Northern Ireland",
        county: "Tyrone",
        city: "Castlederg",
    },
    {
        region: "Northern Ireland",
        county: "Down",
        city: "Castlewellan",
    },
    {
        region: "Northern Ireland",
        county: "Tyrone",
        city: "Clogher",
    },
    {
        region: "Northern Ireland",
        county: "Londonderry",
        city: "Coleraine",
    },
    {
        region: "Northern Ireland",
        county: "Tyrone",
        city: "Cookstown",
    },
    {
        region: "Northern Ireland",
        county: "Armagh",
        city: "Craigavon",
    },
    {
        region: "Northern Ireland",
        county: "Antrim",
        city: "Crumlin",
    },
    {
        region: "Northern Ireland",
        county: "Down",
        city: "Donaghadee",
    },
    {
        region: "Northern Ireland",
        county: "Down",
        city: "Downpatrick",
    },
    {
        region: "Northern Ireland",
        county: "Down",
        city: "Dromore",
    },
    {
        region: "Northern Ireland",
        county: "Tyrone",
        city: "Dungannon",
    },
    {
        region: "Northern Ireland",
        county: "Fermanagh",
        city: "Enniskillen",
    },
    {
        region: "Northern Ireland",
        county: "Tyrone",
        city: "Fivemiletown",
    },
    {
        region: "Northern Ireland",
        county: "Down",
        city: "Hillsborough",
    },
    {
        region: "Northern Ireland",
        county: "Down",
        city: "Holywood",
    },
    {
        region: "Northern Ireland",
        county: "Antrim",
        city: "Larne",
    },
    {
        region: "Northern Ireland",
        county: "Londonderry",
        city: "Limavady",
    },
    {
        region: "Northern Ireland",
        county: "Antrim",
        city: "Lisburn",
    },
    {
        region: "Northern Ireland",
        county: "Londonderry",
        city: "Londonderry",
    },
    {
        region: "Northern Ireland",
        county: "Londonderry",
        city: "Maghera",
    },
    {
        region: "Northern Ireland",
        county: "Londonderry",
        city: "Magherafelt",
    },
    {
        region: "Northern Ireland",
        county: "Down",
        city: "Newcastle",
    },
    {
        region: "Northern Ireland",
        county: "Down",
        city: "Newry",
    },
    {
        region: "Northern Ireland",
        county: "Antrim",
        city: "Newtownabbey",
    },
    {
        region: "Northern Ireland",
        county: "Down",
        city: "Newtownards",
    },
    {
        region: "Northern Ireland",
        county: "Tyrone",
        city: "Omagh",
    },
    {
        region: "Northern Ireland",
        county: "Antrim",
        city: "Portrush",
    },
    {
        region: "Northern Ireland",
        county: "Londonderry",
        city: "Portstewart",
    },
    {
        region: "Northern Ireland",
        county: "Tyrone",
        city: "Strabane",
    },
    {
        country: "Germany",
        city: "Munich",
    },
    {
        country: "China",
        city: "Hong Kong",
    },
    { name: "Northland" },
    { name: "Auckland" },
    { name: "Waikato" },
    { name: "Bay of Plenty" },
    { name: "Gisborne" },
    { name: "Hawke's Bay" },
    { name: "Hawkes Bay" },
    { name: "Taranaki" },
    { name: "Manawatū-Whanganui" },
    { name: "Wellington" },
    { name: "Tasman" },
    { name: "Nelson" },
    { name: "Marlborough" },
    { name: "West Coast" },
    { name: "Canterbury" },
    { name: "Otago" },
    { name: "Southland" },
    { country: "New Zealand", city: "Auckland" },
    { country: "New Zealand", city: "Wellington" },
    { country: "New Zealand", city: "Christchurch" },
    { country: "New Zealand", city: "Hamilton" },
    { country: "New Zealand", city: "Tauranga" },
    { country: "New Zealand", city: "Napier-Hastings" },
    { country: "New Zealand", city: "Dunedin" },
    { country: "New Zealand", city: "Palmerston North" },
    { country: "New Zealand", city: "Nelson" },
    { country: "New Zealand", city: "Rotorua" },
    { country: "New Zealand", city: "Whangārei" },
    { country: "New Zealand", city: "Whangarei" },
    { country: "New Zealand", city: "New Plymouth" },
    { country: "New Zealand", city: "Invercargill" },
    { country: "New Zealand", city: "Whanganui" },
    { country: "New Zealand", city: "Gisborne" },
    { country: "Australia", city: "Sydney" },
    { country: "Australia", city: "Melbourne" },
    { country: "Australia", city: "Brisbane" },
    { country: "Australia", city: "Perth" },
    { country: "Australia", city: "Adelaide" },
    { country: "Australia", city: "Gold Coast–Tweed Heads (Gold Coast part)" },
    { country: "Australia", city: "Canberra–Queanbeyan (Canberra part)" },
    { country: "Australia", city: "Newcastle" },
    { country: "Australia", city: "Central Coast" },
    { country: "Australia", city: "Wollongong" },
    { country: "Australia", city: "Sunshine Coast" },
    { country: "Australia", city: "Hobart" },
    { country: "Australia", city: "Townsville" },
    { country: "Australia", city: "Geelong" },
    { country: "Australia", city: "Cairns" },
    { country: "Australia", city: "Darwin" },
    { country: "Australia", city: "Toowoomba" },
    { country: "Australia", city: "Ballarat" },
    { country: "Australia", city: "Bendigo" },
    { country: "Australia", city: "Maitland" },
    { country: "Australia", city: "Mackay" },
    { country: "Australia", city: "Launceston" },
    { country: "Australia", city: "Bunbury" },
    { country: "Australia", city: "Rockhampton" },
    { country: "Australia", city: "Gold Coast–Tweed Heads (Tweed Heads part)" },
    { country: "Australia", city: "Melton" },
    { country: "Australia", city: "Hervey Bay" },
    { country: "Australia", city: "Bundaberg" },
    { country: "Australia", city: "Wagga Wagga" },
    { country: "Australia", city: "Coffs Harbour" },
    { country: "Australia", city: "Albury–Wodonga (Albury part)" },
    { country: "Australia", city: "Shepparton–Mooroopna" },
    { country: "Australia", city: "Port Macquarie" },
    { country: "Australia", city: "Orange" },
    { country: "Australia", city: "Canberra–Queanbeyan (Queanbeyan part)" },
    { country: "Australia", city: "Albury–Wodonga (Wodonga part)" },
    { country: "Australia", city: "Sunbury" },
    { country: "Australia", city: "Dubbo" },
    { country: "Australia", city: "Tamworth" },
    { country: "Australia", city: "Bathurst" },
    { country: "Australia", city: "Mildura–Buronga (Mildura part)" },
    { country: "Australia", city: "Gladstone" },
    { country: "Australia", city: "Geraldton" },
    { country: "Australia", city: "Nowra–Bomaderry" },
    { country: "Australia", city: "Warrnambool" },
    { country: "Australia", city: "Kalgoorlie–Boulder" },
    { country: "Australia", city: "Albany" },
    { country: "Australia", city: "Blue Mountains" },
    { country: "Australia", city: "Lismore" },
    { country: "Australia", city: "Gawler" },
    { name: "New South Wales" },
    { name: "Queensland" },
    { name: "South Australia" },
    { name: "Tasmania" },
    { name: "Victoria" },
    { name: "Western Australia" },
    {
        region: "Yorkshire",
        county: "South Yorkshire",
        city: "Barnsley",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Batley",
    },
    {
        region: "Yorkshire",
        county: "North Yorkshire",
        city: "Bedale",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Bingley",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Bradford",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Brighouse",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Castleford",
    },
    {
        region: "Yorkshire",
        county: "North Yorkshire",
        city: "Catterick Garrison",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Cleckheaton",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Dewsbury",
    },
    {
        region: "Yorkshire",
        county: "South Yorkshire",
        city: "Doncaster",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Elland",
    },
    {
        region: "Yorkshire",
        county: "North Yorkshire",
        city: "Filey",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Halifax",
    },
    {
        region: "Yorkshire",
        county: "North Yorkshire",
        city: "Harrogate",
    },
    {
        region: "Yorkshire",
        county: "North Yorkshire",
        city: "Hawes",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Hebden Bridge",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Heckmondwike",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Holmfirth",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Huddersfield",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Ilkley",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Keighley",
    },
    {
        region: "Yorkshire",
        county: "North Yorkshire",
        city: "Knaresborough",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Knottingley",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Leeds",
    },
    {
        region: "Yorkshire",
        county: "North Yorkshire",
        city: "Leyburn",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Liversedge",
    },
    {
        region: "Yorkshire",
        county: "North Yorkshire",
        city: "Malton",
    },
    {
        region: "Yorkshire",
        county: "South Yorkshire",
        city: "Mexborough",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Mirfield",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Normanton",
    },
    {
        region: "Yorkshire",
        county: "North Yorkshire",
        city: "Northallerton",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Ossett",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Otley",
    },
    {
        region: "Yorkshire",
        county: "North Yorkshire",
        city: "Pickering",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Pontefract",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Pudsey",
    },
    {
        region: "Yorkshire",
        county: "North Yorkshire",
        city: "Richmond",
    },
    {
        region: "Yorkshire",
        county: "North Yorkshire",
        city: "Ripon",
    },
    {
        region: "Yorkshire",
        county: "South Yorkshire",
        city: "Rotherham",
    },
    {
        region: "Yorkshire",
        county: "North Yorkshire",
        city: "Scarborough",
    },
    {
        region: "Yorkshire",
        county: "North Yorkshire",
        city: "Selby",
    },
    {
        region: "Yorkshire",
        county: "North Yorkshire",
        city: "Settle",
    },
    {
        region: "Yorkshire",
        county: "South Yorkshire",
        city: "Sheffield",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Shipley",
    },
    {
        region: "Yorkshire",
        county: "North Yorkshire",
        city: "Skipton",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Sowerby Bridge",
    },
    {
        region: "Yorkshire",
        county: "North Yorkshire",
        city: "Tadcaster",
    },
    {
        region: "Yorkshire",
        county: "North Yorkshire",
        city: "Thirsk",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Wakefield",
    },
    {
        region: "Yorkshire",
        county: "West Yorkshire",
        city: "Wetherby",
    },
    {
        region: "Yorkshire",
        county: "North Yorkshire",
        city: "Whitby",
    },
    {
        region: "Yorkshire",
        county: "North Yorkshire",
        city: "York",
    },
    {
        region: "West Midlands",
        county: "Warwickshire",
        city: "Alcester",
    },
    {
        region: "West Midlands",
        county: "Warwickshire",
        city: "Atherstone",
    },
    {
        region: "West Midlands",
        county: "Warwickshire",
        city: "Bedworth",
    },
    {
        region: "West Midlands",
        county: "Worcestershire",
        city: "Bewdley",
    },
    {
        region: "West Midlands",
        county: "West Midlands",
        city: "Bilston",
    },
    {
        region: "West Midlands",
        county: "West Midlands",
        city: "Birmingham",
    },
    {
        region: "West Midlands",
        county: "Shropshire",
        city: "Bishops Castle",
    },
    {
        region: "West Midlands",
        county: "Shropshire",
        city: "Bridgnorth",
    },
    {
        region: "West Midlands",
        county: "West Midlands",
        city: "Brierley Hill",
    },
    {
        region: "West Midlands",
        county: "Worcestershire",
        city: "Broadway",
    },
    {
        region: "West Midlands",
        county: "Worcestershire",
        city: "Bromsgrove",
    },
    {
        region: "West Midlands",
        county: "Herefordshire",
        city: "Bromyard",
    },
    {
        region: "West Midlands",
        county: "Shropshire",
        city: "Broseley",
    },
    {
        region: "West Midlands",
        county: "Shropshire",
        city: "Bucknell",
    },
    {
        region: "West Midlands",
        county: "Staffordshire",
        city: "Burntwood",
    },
    {
        region: "West Midlands",
        county: "Staffordshire",
        city: "Burton-On-Trent",
    },
    {
        region: "West Midlands",
        county: "Staffordshire",
        city: "Cannock",
    },
    {
        region: "West Midlands",
        county: "Shropshire",
        city: "Church Stretton",
    },
    {
        region: "West Midlands",
        county: "West Midlands",
        city: "Coventry",
    },
    {
        region: "West Midlands",
        county: "West Midlands",
        city: "Cradley Heath",
    },
    {
        region: "West Midlands",
        county: "Shropshire",
        city: "Craven Arms",
    },
    {
        region: "West Midlands",
        county: "Worcestershire",
        city: "Droitwich",
    },
    {
        region: "West Midlands",
        county: "West Midlands",
        city: "Dudley",
    },
    {
        region: "West Midlands",
        county: "Shropshire",
        city: "Ellesmere",
    },
    {
        region: "West Midlands",
        county: "Worcestershire",
        city: "Evesham",
    },
    {
        region: "West Midlands",
        county: "West Midlands",
        city: "Halesowen",
    },
    {
        region: "West Midlands",
        county: "West Midlands",
        city: "Henley-In-Arden",
    },
    {
        region: "West Midlands",
        county: "Herefordshire",
        city: "Hereford",
    },
    {
        region: "West Midlands",
        county: "Warwickshire",
        city: "Kenilworth",
    },
    {
        region: "West Midlands",
        county: "Worcestershire",
        city: "Kidderminster",
    },
    {
        region: "West Midlands",
        county: "West Midlands",
        city: "Kingswinford",
    },
    {
        region: "West Midlands",
        county: "Herefordshire",
        city: "Kington",
    },
    {
        region: "West Midlands",
        county: "Warwickshire",
        city: "Leamington Spa",
    },
    {
        region: "West Midlands",
        county: "Herefordshire",
        city: "Ledbury",
    },
    {
        region: "West Midlands",
        county: "Staffordshire",
        city: "Leek",
    },
    {
        region: "West Midlands",
        county: "Herefordshire",
        city: "Leominster",
    },
    {
        region: "West Midlands",
        county: "Staffordshire",
        city: "Lichfield",
    },
    {
        region: "West Midlands",
        county: "Shropshire",
        city: "Ludlow",
    },
    {
        region: "West Midlands",
        county: "Shropshire",
        city: "Lydbury North",
    },
    {
        region: "West Midlands",
        county: "Worcestershire",
        city: "Malvern",
    },
    {
        region: "West Midlands",
        county: "Shropshire",
        city: "Market Drayton",
    },
    {
        region: "West Midlands",
        county: "Shropshire",
        city: "Much Wenlock",
    },
    {
        region: "West Midlands",
        county: "Staffordshire",
        city: "Newcastle",
    },
    {
        region: "West Midlands",
        county: "Shropshire",
        city: "Newport",
    },
    {
        region: "West Midlands",
        county: "Warwickshire",
        city: "Nuneaton",
    },
    {
        region: "West Midlands",
        county: "West Midlands",
        city: "Oldbury",
    },
    {
        region: "West Midlands",
        county: "Shropshire",
        city: "Oswestry",
    },
    {
        region: "West Midlands",
        county: "Worcestershire",
        city: "Pershore",
    },
    {
        region: "West Midlands",
        county: "Worcestershire",
        city: "Redditch",
    },
    {
        region: "West Midlands",
        county: "Herefordshire",
        city: "Ross-On-Wye",
    },
    {
        region: "West Midlands",
        county: "West Midlands",
        city: "Rowley Regis",
    },
    {
        region: "West Midlands",
        county: "Warwickshire",
        city: "Rugby",
    },
    {
        region: "West Midlands",
        county: "Staffordshire",
        city: "Rugeley",
    },
    {
        region: "West Midlands",
        county: "Shropshire",
        city: "Shifnal",
    },
    {
        region: "West Midlands",
        county: "Warwickshire",
        city: "Shipston-On-Stour",
    },
    {
        region: "West Midlands",
        county: "Shropshire",
        city: "Shrewsbury",
    },
    {
        region: "West Midlands",
        county: "West Midlands",
        city: "Smethwick",
    },
    {
        region: "West Midlands",
        county: "West Midlands",
        city: "Solihull",
    },
    {
        region: "West Midlands",
        county: "Warwickshire",
        city: "Southam",
    },
    {
        region: "West Midlands",
        county: "Staffordshire",
        city: "Stafford",
    },
    {
        region: "West Midlands",
        county: "Staffordshire",
        city: "Stoke-On-Trent",
    },
    {
        region: "West Midlands",
        county: "Staffordshire",
        city: "Stone",
    },
    {
        region: "West Midlands",
        county: "West Midlands",
        city: "Stourbridge",
    },
    {
        region: "West Midlands",
        county: "Worcestershire",
        city: "Stourport-On-Severn",
    },
    {
        region: "West Midlands",
        county: "Warwickshire",
        city: "Stratford-Upon-Avon",
    },
    {
        region: "West Midlands",
        county: "Warwickshire",
        city: "Studley",
    },
    {
        region: "West Midlands",
        county: "West Midlands",
        city: "Sutton Coldfield",
    },
    {
        region: "West Midlands",
        county: "Staffordshire",
        city: "Tamworth",
    },
    {
        region: "West Midlands",
        county: "Shropshire",
        city: "Telford",
    },
    {
        region: "West Midlands",
        county: "Worcestershire",
        city: "Tenbury Wells",
    },
    {
        region: "West Midlands",
        county: "West Midlands",
        city: "Tipton",
    },
    {
        region: "West Midlands",
        county: "Staffordshire",
        city: "Uttoxeter",
    },
    {
        region: "West Midlands",
        county: "West Midlands",
        city: "Walsall",
    },
    {
        region: "West Midlands",
        county: "Warwickshire",
        city: "Warwick",
    },
    {
        region: "West Midlands",
        county: "West Midlands",
        city: "Wednesbury",
    },
    {
        region: "West Midlands",
        county: "West Midlands",
        city: "West Bromwich",
    },
    {
        region: "West Midlands",
        county: "Shropshire",
        city: "Whitchurch",
    },
    {
        region: "West Midlands",
        county: "West Midlands",
        city: "Willenhall",
    },
    {
        region: "West Midlands",
        county: "West Midlands",
        city: "Wolverhampton",
    },
    {
        region: "West Midlands",
        county: "Worcestershire",
        city: "Worcester",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Axbridge",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Axminster",
    },
    {
        region: "South West",
        county: "Avon",
        city: "Badminton",
    },
    {
        region: "South West",
        county: "Avon",
        city: "Banwell",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Barnstaple",
    },
    {
        region: "South West",
        county: "Avon",
        city: "Bath",
    },
    {
        region: "South West",
        county: "Dorset",
        city: "Beaminster",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Beaworthy",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Berkeley",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Bideford",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Blakeney",
    },
    {
        region: "South West",
        county: "Dorset",
        city: "Blandford Forum",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Bodmin",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Boscastle",
    },
    {
        region: "South West",
        county: "Dorset",
        city: "Bournemouth",
    },
    {
        region: "South West",
        county: "Wiltshire",
        city: "Bradford-On-Avon",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Braunton",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Bridgwater",
    },
    {
        region: "South West",
        county: "Dorset",
        city: "Bridport",
    },
    {
        region: "South West",
        county: "Avon",
        city: "Bristol",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Brixham",
    },
    {
        region: "South West",
        county: "Dorset",
        city: "Broadstone",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Bruton",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Buckfastleigh",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Bude",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Budleigh Salterton",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Burnham-On-Sea",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Callington",
    },
    {
        region: "South West",
        county: "Wiltshire",
        city: "Calne",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Calstock",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Camborne",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Camelford",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Castle Cary",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Chard",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Cheddar",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Cheltenham",
    },
    {
        region: "South West",
        county: "Wiltshire",
        city: "Chippenham",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Chipping Campden",
    },
    {
        region: "South West",
        county: "Dorset",
        city: "Christchurch",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Chulmleigh",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Cinderford",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Cirencester",
    },
    {
        region: "South West",
        county: "Avon",
        city: "Clevedon",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Coleford",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Colyton",
    },
    {
        region: "South West",
        county: "Wiltshire",
        city: "Corsham",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Crediton",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Crewkerne",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Cullompton",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Dartmouth",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Dawlish",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Delabole",
    },
    {
        region: "South West",
        county: "Wiltshire",
        city: "Devizes",
    },
    {
        region: "South West",
        county: "Dorset",
        city: "Dorchester",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Drybrook",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Dulverton",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Dursley",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Dymock",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Exeter",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Exmouth",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Fairford",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Falmouth",
    },
    {
        region: "South West",
        county: "Dorset",
        city: "Ferndown",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Fowey",
    },
    {
        region: "South West",
        county: "Avon",
        city: "Frome, Avon",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Frome",
    },
    {
        region: "South West",
        county: "Dorset",
        city: "Gillingham",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Glastonbury",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Gloucester",
    },
    {
        region: "South West",
        county: "Channel Isles",
        city: "Guernsey",
    },
    {
        region: "South West",
        county: "Channel Isles",
        city: "Guernsey",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Gunnislake",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Hayle",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Helston",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Highbridge",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Hinton St. George",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Holsworthy",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Honiton",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Ilfracombe",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Ilminster",
    },
    {
        region: "South West",
        county: "Isles of Scilly",
        city: "Isles Of Scilly, Isles of Scilly",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Ivybridge",
    },
    {
        region: "South West",
        county: "Channel Isles",
        city: "Jersey",
    },
    {
        region: "South West",
        county: "Channel Isles",
        city: "Jersey",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Kingsbridge, Devon",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Langport",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Launceston",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Lechlade",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Lifton",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Liskeard",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Longhope",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Looe",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Lostwithiel",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Lydbrook",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Lydney",
    },
    {
        region: "South West",
        county: "Dorset",
        city: "Lyme Regis",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Lynmouth",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Lynton",
    },
    {
        region: "South West",
        county: "Wiltshire",
        city: "Malmesbury",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Marazion",
    },
    {
        region: "South West",
        county: "Wiltshire",
        city: "Marlborough",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Martock",
    },
    {
        region: "South West",
        county: "Wiltshire",
        city: "Melksham",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Merriott",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Minehead",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Mitcheldean",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Montacute",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Moreton-In-Marsh",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Newent",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Newnham",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Newquay",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Newton Abbot",
    },
    {
        region: "South West",
        county: "Devon",
        city: "North Tawton",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Okehampton",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Ottery St. Mary",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Padstow",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Paignton",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Par",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Penryn",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Penzance",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Perranporth",
    },
    {
        region: "South West",
        county: "Wiltshire",
        city: "Pewsey",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Plymouth",
    },
    {
        region: "South West",
        county: "Dorset",
        city: "Poole",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Port Isaac",
    },
    {
        region: "South West",
        county: "Dorset",
        city: "Portland",
    },
    {
        region: "South West",
        county: "Avon",
        city: "Radstock",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Redruth",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Ruardean",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Salcombe",
    },
    {
        region: "South West",
        county: "Wiltshire",
        city: "Salisbury",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Saltash",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Seaton, Devon",
    },
    {
        region: "South West",
        county: "Dorset",
        city: "Shaftesbury",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Shepton Mallet",
    },
    {
        region: "South West",
        county: "Dorset",
        city: "Sherborne",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Sidmouth",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Somerton",
    },
    {
        region: "South West",
        county: "Devon",
        city: "South Brent",
    },
    {
        region: "South West",
        county: "Devon",
        city: "South Molton",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "South Petherton",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "St. Agnes",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "St. Austell",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "St. Columb",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "St. Ives",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Stoke-Sub-Hamdon",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Stonehouse",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Street",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Stroud",
    },
    {
        region: "South West",
        county: "Dorset",
        city: "Sturminster Newton",
    },
    {
        region: "South West",
        county: "Dorset",
        city: "Swanage",
    },
    {
        region: "South West",
        county: "Wiltshire",
        city: "Swindon",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Taunton",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Tavistock",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Teignmouth",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Templecombe",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Tetbury",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Tewkesbury",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Tintagel",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Tiverton, Devon",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Torpoint",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Torquay",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Torrington",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Totnes",
    },
    {
        region: "South West",
        county: "Wiltshire",
        city: "Trowbridge",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Truro",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Umberleigh",
    },
    {
        region: "South West",
        county: "Dorset",
        city: "Verwood",
    },
    {
        region: "South West",
        county: "Cornwall",
        city: "Wadebridge",
    },
    {
        region: "South West",
        county: "Dorset",
        city: "Wareham",
    },
    {
        region: "South West",
        county: "Wiltshire",
        city: "Warminster",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Watchet",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Wedmore",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Wellington",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Wells",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Westbury-On-Severn",
    },
    {
        region: "South West",
        county: "Wiltshire",
        city: "Westbury",
    },
    {
        region: "South West",
        county: "Avon",
        city: "Weston-Super-Mare",
    },
    {
        region: "South West",
        county: "Dorset",
        city: "Weymouth",
    },
    {
        region: "South West",
        county: "Dorset",
        city: "Wimborne",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Wincanton",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Winkleigh",
    },
    {
        region: "South West",
        county: "Avon",
        city: "Winscombe",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Woolacombe",
    },
    {
        region: "South West",
        county: "Gloucestershire",
        city: "Wotton-Under-Edge",
    },
    {
        region: "South West",
        county: "Devon",
        city: "Yelverton, Devon",
    },
    {
        region: "South West",
        county: "Somerset",
        city: "Yeovil",
    },
    {
        region: "South East",
        county: "Bedfordshire",
        city: "Arlesey",
    },
    {
        region: "South East",
        county: "Bedfordshire",
        city: "Bedford",
    },
    {
        region: "South East",
        county: "Bedfordshire",
        city: "Biggleswade",
    },
    {
        region: "South East",
        county: "Bedfordshire",
        city: "Dunstable",
    },
    {
        region: "South East",
        county: "Bedfordshire",
        city: "Henlow",
    },
    {
        region: "South East",
        county: "Bedfordshire",
        city: "Leighton Buzzard",
    },
    {
        region: "South East",
        county: "Bedfordshire",
        city: "Luton",
    },
    {
        region: "South East",
        county: "Bedfordshire",
        city: "Sandy",
    },
    {
        region: "South East",
        county: "Bedfordshire",
        city: "Shefford",
    },
    {
        region: "South East",
        county: "Berkshire",
        city: "Ascot",
    },
    {
        region: "South East",
        county: "Berkshire",
        city: "Bracknell",
    },
    {
        region: "South East",
        county: "Berkshire",
        city: "Crowthorne",
    },
    {
        region: "South East",
        county: "Berkshire",
        city: "Hungerford",
    },
    {
        region: "South East",
        county: "Berkshire",
        city: "Maidenhead",
    },
    {
        region: "South East",
        county: "Berkshire",
        city: "Newbury",
    },
    {
        region: "South East",
        county: "Berkshire",
        city: "Reading",
    },
    {
        region: "South East",
        county: "Berkshire",
        city: "Sandhurst",
    },
    {
        region: "South East",
        county: "Berkshire",
        city: "Slough",
    },
    {
        region: "South East",
        county: "Berkshire",
        city: "Thatcham",
    },
    {
        region: "South East",
        county: "Berkshire",
        city: "Windsor",
    },
    {
        region: "South East",
        county: "Berkshire",
        city: "Wokingham",
    },
    {
        region: "South East",
        county: "Buckinghamshire",
        city: "Amersham",
    },
    {
        region: "South East",
        county: "Buckinghamshire",
        city: "Aylesbury",
    },
    {
        region: "South East",
        county: "Buckinghamshire",
        city: "Beaconsfield",
    },
    {
        region: "South East",
        county: "Buckinghamshire",
        city: "Bourne End",
    },
    {
        region: "South East",
        county: "Buckinghamshire",
        city: "Buckingham",
    },
    {
        region: "South East",
        county: "Buckinghamshire",
        city: "Chalfont St. Giles",
    },
    {
        region: "South East",
        county: "Buckinghamshire",
        city: "Chesham",
    },
    {
        region: "South East",
        county: "Buckinghamshire",
        city: "Gerrards Cross",
    },
    {
        region: "South East",
        county: "Buckinghamshire",
        city: "Great Missenden",
    },
    {
        region: "South East",
        county: "Buckinghamshire",
        city: "High Wycombe",
    },
    {
        region: "South East",
        county: "Buckinghamshire",
        city: "Iver",
    },
    {
        region: "South East",
        county: "Buckinghamshire",
        city: "Marlow",
    },
    {
        region: "South East",
        county: "Buckinghamshire",
        city: "Milton Keynes",
    },
    {
        region: "South East",
        county: "Buckinghamshire",
        city: "Newport Pagnell",
    },
    {
        region: "South East",
        county: "Buckinghamshire",
        city: "Olney",
    },
    {
        region: "South East",
        county: "Buckinghamshire",
        city: "Princes Risborough",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Battle",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Bexhill-On-Sea",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Brighton",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Crowborough",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Eastbourne",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Etchingham",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Forest Row",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Hailsham",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Hartfield",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Hastings",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Heathfield",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Hove",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Lewes",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Mayfield",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Newhaven",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Peacehaven",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Pevensey",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Polegate",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Robertsbridge",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Rye",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Seaford",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "St. Leonards-On-Sea",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Uckfield",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Wadhurst",
    },
    {
        region: "South East",
        county: "East Sussex",
        city: "Winchelsea",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Aldershot",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Alresford",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Alton",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Andover",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Basingstoke",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Bordon",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Brockenhurst",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Eastleigh",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Emsworth",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Fareham",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Farnborough",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Fleet",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Fordingbridge",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Gosport",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Havant",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Hayling Island",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Hook",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Lee-On-The-Solent",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Liphook",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Liss",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Lymington",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Lyndhurst",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "New Milton",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Petersfield",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Portsmouth",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Ringwood",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Romsey",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Rowland's Castle",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Southampton",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Southsea",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Stockbridge",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Tadley",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Tidworth",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Waterlooville",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Whitchurch",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Winchester",
    },
    {
        region: "South East",
        county: "Hampshire",
        city: "Yateley",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Abbots Langley",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Baldock",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Barnet",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Berkhamsted",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Bishop's Stortford",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Borehamwood",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Broxbourne",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Buntingford",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Bushey",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Harpenden",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Hatfield",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Hemel Hempstead",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Hertford",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Hitchin",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Hoddesdon",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Kings Langley",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Knebworth",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Letchworth Garden City",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Much Hadham",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Potters Bar",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Radlett",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Rickmansworth",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Royston",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Sawbridgeworth",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "St. Albans",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Stevenage",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Tring",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Waltham Cross",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Ware",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Watford",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Welwyn",
    },
    {
        region: "South East",
        county: "Hertfordshire",
        city: "Welwyn Garden City",
    },
    {
        region: "South East",
        county: "Isle of Wight",
        city: "Bembridge",
    },
    {
        region: "South East",
        county: "Isle of Wight",
        city: "Cowes",
    },
    {
        region: "South East",
        county: "Isle of Wight",
        city: "East Cowes",
    },
    {
        region: "South East",
        county: "Isle of Wight",
        city: "Freshwater",
    },
    {
        region: "South East",
        county: "Isle of Wight",
        city: "Newport",
    },
    {
        region: "South East",
        county: "Isle of Wight",
        city: "Ryde",
    },
    {
        region: "South East",
        county: "Isle of Wight",
        city: "Sandown",
    },
    {
        region: "South East",
        county: "Isle of Wight",
        city: "Seaview",
    },
    {
        region: "South East",
        county: "Isle of Wight",
        city: "Shanklin",
    },
    {
        region: "South East",
        county: "Isle of Wight",
        city: "Totland Bay",
    },
    {
        region: "South East",
        county: "Isle of Wight",
        city: "Ventnor",
    },
    {
        region: "South East",
        county: "Isle of Wight",
        city: "Yarmouth",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Ashford",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Aylesford",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Beckenham",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Belvedere",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Bexley",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Bexleyheath",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Birchington",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Broadstairs",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Bromley",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Canterbury",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Chatham",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Chislehurst",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Cranbrook",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Dartford",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Deal",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Dover",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Edenbridge",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Erith",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Faversham",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Folkestone",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Gillingham",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Gravesend",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Greenhithe",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Herne Bay",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Hythe",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Keston",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Longfield",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Maidstone",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Margate",
    },
    {
        region: "South East",
        county: "Kent",
        city: "New Romney",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Orpington",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Queenborough",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Ramsgate",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Rochester",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Romney Marsh",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Sandwich",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Sevenoaks",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Sheerness",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Sidcup",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Sittingbourne",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Snodland",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Swanley",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Swanscombe",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Tenterden",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Tonbridge",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Tunbridge Wells",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Welling",
    },
    {
        region: "South East",
        county: "Kent",
        city: "West Malling",
    },
    {
        region: "South East",
        county: "Kent",
        city: "West Wickham",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Westerham",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Westgate-On-Sea",
    },
    {
        region: "South East",
        county: "Kent",
        city: "Whitstable",
    },
    // GOTCHA - we are going to consider london as its own region
    // {
    //   "region": "South East",
    //   "county": "London",
    //   "city": "Central London / West End"
    // },
    // {
    //   "region": "South East",
    //   "county": "London",
    //   "city": "City"
    // },
    // {
    //   "region": "South East",
    //   "county": "London",
    //   "city": "East London"
    // },
    // {
    //   "region": "South East",
    //   "county": "London",
    //   "city": "North London"
    // },
    // {
    //   "region": "South East",
    //   "county": "London",
    //   "city": "North West London"
    // },
    // {
    //   "region": "South East",
    //   "county": "London",
    //   "city": "South East London"
    // },
    // {
    //   "region": "South East",
    //   "county": "London",
    //   "city": "South West London"
    // },
    // {
    //   "region": "South East",
    //   "county": "London",
    //   "city": "West London"
    // },
    {
        region: "South East",
        county: "Middlesex",
        city: "Ashford",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "Brentford",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "Edgware",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "Enfield",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "Feltham",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "Greenford",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "Hampton",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "Harrow",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "Hayes",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "Hounslow",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "Isleworth",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "Northolt",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "Northwood",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "Pinner",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "Ruislip",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "Shepperton",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "Southall",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "Staines",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "Stanmore",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "Sunbury-On-Thames",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "Teddington",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "Twickenham",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "Uxbridge",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "Wembley",
    },
    {
        region: "South East",
        county: "Middlesex",
        city: "West Drayton",
    },
    {
        region: "South East",
        county: "Oxfordshire",
        city: "Abingdon",
    },
    {
        region: "South East",
        county: "Oxfordshire",
        city: "Bampton",
    },
    {
        region: "South East",
        county: "Oxfordshire",
        city: "Banbury",
    },
    {
        region: "South East",
        county: "Oxfordshire",
        city: "Bicester",
    },
    {
        region: "South East",
        county: "Oxfordshire",
        city: "Burford",
    },
    {
        region: "South East",
        county: "Oxfordshire",
        city: "Carterton",
    },
    {
        region: "South East",
        county: "Oxfordshire",
        city: "Chinnor",
    },
    {
        region: "South East",
        county: "Oxfordshire",
        city: "Chipping Norton",
    },
    {
        region: "South East",
        county: "Oxfordshire",
        city: "Didcot",
    },
    {
        region: "South East",
        county: "Oxfordshire",
        city: "Faringdon",
    },
    {
        region: "South East",
        county: "Oxfordshire",
        city: "Henley-On-Thames",
    },
    {
        region: "South East",
        county: "Oxfordshire",
        city: "Kidlington",
    },
    {
        region: "South East",
        county: "Oxfordshire",
        city: "Oxford",
    },
    {
        region: "South East",
        county: "Oxfordshire",
        city: "Thame",
    },
    {
        region: "South East",
        county: "Oxfordshire",
        city: "Wallingford",
    },
    {
        region: "South East",
        county: "Oxfordshire",
        city: "Wantage",
    },
    {
        region: "South East",
        county: "Oxfordshire",
        city: "Watlington",
    },
    {
        region: "South East",
        county: "Oxfordshire",
        city: "Witney",
    },
    {
        region: "South East",
        county: "Oxfordshire",
        city: "Woodstock",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Addlestone",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Ashtead",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Bagshot",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Banstead",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Betchworth",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Camberley",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Carshalton",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Caterham",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Chertsey",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Chessington",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Cobham",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Coulsdon",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Cranleigh",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Croydon",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Dorking",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "East Molesey",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Egham",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Epsom",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Esher",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Farnham",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Godalming",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Godstone",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Guildford",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Haslemere",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Hindhead",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Horley",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Kenley",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Kingston Upon Thames",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Leatherhead",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Lightwater",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Lingfield",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Mitcham",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Morden",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "New Malden",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Oxted",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Purley",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Redhill",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Reigate",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Richmond",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "South Croydon",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Surbiton",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Sutton",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Tadworth",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Thames Ditton",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Thornton Heath",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Virginia Water",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Wallington",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Walton-On-Thames",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Warlingham",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "West Byfleet",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "West Molesey",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Weybridge",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Whyteleafe",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Windlesham",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Woking",
    },
    {
        region: "South East",
        county: "Surrey",
        city: "Worcester Park",
    },
    {
        region: "South East",
        county: "West Sussex",
        city: "Arundel",
    },
    {
        region: "South East",
        county: "West Sussex",
        city: "Billingshurst",
    },
    {
        region: "South East",
        county: "West Sussex",
        city: "Bognor Regis",
    },
    {
        region: "South East",
        county: "West Sussex",
        city: "Burgess Hill",
    },
    {
        region: "South East",
        county: "West Sussex",
        city: "Chichester",
    },
    {
        region: "South East",
        county: "West Sussex",
        city: "Crawley",
    },
    {
        region: "South East",
        county: "West Sussex",
        city: "East Grinstead",
    },
    {
        region: "South East",
        county: "West Sussex",
        city: "Gatwick",
    },
    {
        region: "South East",
        county: "West Sussex",
        city: "Hassocks",
    },
    {
        region: "South East",
        county: "West Sussex",
        city: "Haywards Heath",
    },
    {
        region: "South East",
        county: "West Sussex",
        city: "Henfield",
    },
    {
        region: "South East",
        county: "West Sussex",
        city: "Horsham",
    },
    {
        region: "South East",
        county: "West Sussex",
        city: "Lancing",
    },
    {
        region: "South East",
        county: "West Sussex",
        city: "Littlehampton",
    },
    {
        region: "South East",
        county: "West Sussex",
        city: "Midhurst",
    },
    {
        region: "South East",
        county: "West Sussex",
        city: "Petworth",
    },
    {
        region: "South East",
        county: "West Sussex",
        city: "Pulborough",
    },
    {
        region: "South East",
        county: "West Sussex",
        city: "Shoreham-By-Sea",
    },
    {
        region: "South East",
        county: "West Sussex",
        city: "Steyning",
    },
    {
        region: "South East",
        county: "West Sussex",
        city: "Worthing",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Accrington",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Alderley Edge",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Alston",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Altrincham",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Ambleside",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Appleby-In-Westmorland",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Ashton-Under-Lyne",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Askam-In-Furness",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Bacup",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Barnoldswick",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Barrow-In-Furness",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Beckermet",
    },
    {
        region: "North West",
        county: "Merseyside",
        city: "Birkenhead",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Blackburn",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Blackpool",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Bolton",
    },
    {
        region: "North West",
        county: "Merseyside",
        city: "Bootle",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Brampton",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Broughton-In-Furness",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Burnley",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Bury",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Carlisle",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Carnforth",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Cheadle",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Chester",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Chorley",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Cleator",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Cleator Moor",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Clitheroe",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Cockermouth",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Colne",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Congleton",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Coniston",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Crewe",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Dalton-In-Furness",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Darwen",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Dukinfield",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Egremont",
    },
    {
        region: "North West",
        county: "Merseyside",
        city: "Ellesmere Port",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Fleetwood",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Frizington",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Frodsham",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Grange-Over-Sands",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Heywood",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Holmrook",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Hyde",
    },
    {
        region: "North West",
        county: "Isle of Man",
        city: "Isle Of Man",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Kendal",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Keswick",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Kirkby Stephen",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Kirkby-In-Furness",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Knutsford",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Lancaster",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Leigh",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Leyland",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Littleborough",
    },
    {
        region: "North West",
        county: "Merseyside",
        city: "Liverpool",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Lymm",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Lytham St. Annes",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Macclesfield",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Malpas",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Manchester",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Maryport",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Middlewich",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Millom",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Milnthorpe",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Moor Row",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Morecambe",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Nantwich",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Nelson",
    },
    {
        region: "North West",
        county: "Merseyside",
        city: "Neston",
    },
    {
        region: "North West",
        county: "Merseyside",
        city: "Newton-Le-Willows",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Northwich",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Oldham",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Ormskirk",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Penrith",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Poulton-Le-Fylde",
    },
    {
        region: "North West",
        county: "Merseyside",
        city: "Prenton",
    },
    {
        region: "North West",
        county: "Merseyside",
        city: "Prescot",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Preston",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Ravenglass",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Rochdale",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Rossendale",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Runcorn",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Sale",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Salford",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Sandbach",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Seascale",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Sedbergh",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Skelmersdale",
    },
    {
        region: "North West",
        county: "Merseyside",
        city: "Southport",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "St. Bees",
    },
    {
        region: "North West",
        county: "Merseyside",
        city: "St. Helens",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Stalybridge",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Stockport",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Tarporley",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Thornton-Cleveleys",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Todmorden",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Ulverston",
    },
    {
        region: "North West",
        county: "Merseyside",
        city: "Wallasey",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Warrington",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Whitehaven",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Widnes",
    },
    {
        region: "North West",
        county: "Lancashire",
        city: "Wigan",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Wigton",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Wilmslow",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Windermere",
    },
    {
        region: "North West",
        county: "Cheshire",
        city: "Winsford",
    },
    {
        region: "North West",
        county: "Merseyside",
        city: "Wirral",
    },
    {
        region: "North West",
        county: "Cumbria",
        city: "Workington",
    },
    {
        region: "North East",
        county: "Northumberland",
        city: "Alnwick",
    },
    {
        region: "North East",
        county: "Northumberland",
        city: "Ashington",
    },
    {
        region: "North East",
        county: "Northumberland",
        city: "Bamburgh",
    },
    {
        region: "North East",
        county: "Durham",
        city: "Barnard Castle",
    },
    {
        region: "North East",
        county: "South Humberside",
        city: "Barnetby",
    },
    {
        region: "North East",
        county: "South Humberside",
        city: "Barrow-Upon-Humber",
    },
    {
        region: "North East",
        county: "South Humberside",
        city: "Barton-Upon-Humber",
    },
    {
        region: "North East",
        county: "Northumberland",
        city: "Bedlington",
    },
    {
        region: "North East",
        county: "Northumberland",
        city: "Belford",
    },
    {
        region: "North East",
        county: "Northumberland",
        city: "Berwick-Upon-Tweed",
    },
    {
        region: "North East",
        county: "North Humberside",
        city: "Beverley",
    },
    {
        region: "North East",
        county: "Cleveland",
        city: "Billingham",
    },
    {
        region: "North East",
        county: "Durham",
        city: "Bishop Auckland",
    },
    {
        region: "North East",
        county: "Tyne and Wear",
        city: "Blaydon-On-Tyne",
    },
    {
        region: "North East",
        county: "Northumberland",
        city: "Blyth",
    },
    {
        region: "North East",
        county: "Tyne and Wear",
        city: "Boldon Colliery",
    },
    {
        region: "North East",
        county: "North Humberside",
        city: "Bridlington",
    },
    {
        region: "North East",
        county: "South Humberside",
        city: "Brigg",
    },
    {
        region: "North East",
        county: "North Humberside",
        city: "Brough",
    },
    {
        region: "North East",
        county: "Northumberland",
        city: "Chathill",
    },
    {
        region: "North East",
        county: "Durham",
        city: "Chester Le Street",
    },
    {
        region: "North East",
        county: "Northumberland",
        city: "Choppington",
    },
    {
        region: "North East",
        county: "South Humberside",
        city: "Cleethorpes",
    },
    {
        region: "North East",
        county: "Durham",
        city: "Consett",
    },
    {
        region: "North East",
        county: "Northumberland",
        city: "Corbridge",
    },
    {
        region: "North East",
        county: "Northumberland",
        city: "Cornhill-On-Tweed",
    },
    {
        region: "North East",
        county: "North Humberside",
        city: "Cottingham",
    },
    {
        region: "North East",
        county: "Northumberland",
        city: "Cramlington",
    },
    {
        region: "North East",
        county: "Durham",
        city: "Crook",
    },
    {
        region: "North East",
        county: "Durham",
        city: "Darlington",
    },
    {
        region: "North East",
        county: "North Humberside",
        city: "Driffield",
    },
    {
        region: "North East",
        county: "Durham",
        city: "Durham",
    },
    {
        region: "North East",
        county: "Tyne and Wear",
        city: "East Boldon",
    },
    {
        region: "North East",
        county: "Durham",
        city: "Ferryhill",
    },
    {
        region: "North East",
        county: "Tyne and Wear",
        city: "Gateshead",
    },
    {
        region: "North East",
        county: "North Humberside",
        city: "Goole",
    },
    {
        region: "North East",
        county: "South Humberside",
        city: "Grimsby",
    },
    {
        region: "North East",
        county: "Cleveland",
        city: "Guisborough",
    },
    {
        region: "North East",
        county: "Northumberland",
        city: "Haltwhistle",
    },
    {
        region: "North East",
        county: "Cleveland",
        city: "Hartlepool",
    },
    {
        region: "North East",
        county: "Tyne and Wear",
        city: "Hebburn",
    },
    {
        region: "North East",
        county: "North Humberside",
        city: "Hessle",
    },
    {
        region: "North East",
        county: "Northumberland",
        city: "Hexham",
    },
    {
        region: "North East",
        county: "North Humberside",
        city: "Hornsea",
    },
    {
        region: "North East",
        county: "Tyne and Wear",
        city: "Houghton Le Spring",
    },
    {
        region: "North East",
        county: "North Humberside",
        city: "Hull",
    },
    {
        region: "North East",
        county: "South Humberside",
        city: "Immingham",
    },
    {
        region: "North East",
        county: "Tyne and Wear",
        city: "Jarrow",
    },
    {
        region: "North East",
        county: "Cleveland",
        city: "Middlesbrough",
    },
    {
        region: "North East",
        county: "Northumberland",
        city: "Mindrum",
    },
    {
        region: "North East",
        county: "Northumberland",
        city: "Morpeth",
    },
    {
        region: "North East",
        county: "Northumberland",
        city: "Newbiggin-By-The-Sea",
    },
    {
        region: "North East",
        county: "Tyne and Wear",
        city: "Newcastle Upon Tyne",
    },
    {
        region: "North East",
        county: "Tyne and Wear",
        city: "Newcastle-upon-Tyne",
    },
    {
        region: "North East",
        county: "Durham",
        city: "Newton Aycliffe",
    },
    {
        region: "North East",
        county: "North Humberside",
        city: "North Ferriby",
    },
    {
        region: "North East",
        county: "Tyne and Wear",
        city: "North Shields",
    },
    {
        region: "North East",
        county: "Durham",
        city: "Peterlee",
    },
    {
        region: "North East",
        county: "Northumberland",
        city: "Prudhoe",
    },
    {
        region: "North East",
        county: "Cleveland",
        city: "Redcar",
    },
    {
        region: "North East",
        county: "Northumberland",
        city: "Riding Mill",
    },
    {
        region: "North East",
        county: "Tyne and Wear",
        city: "Rowlands Gill",
    },
    {
        region: "North East",
        county: "Tyne and Wear",
        city: "Ryton",
    },
    {
        region: "North East",
        county: "Cleveland",
        city: "Saltburn-By-The-Sea",
    },
    {
        region: "North East",
        county: "South Humberside",
        city: "Scunthorpe",
    },
    {
        region: "North East",
        county: "Durham",
        city: "Seaham",
    },
    {
        region: "North East",
        county: "Northumberland",
        city: "Seahouses",
    },
    {
        region: "North East",
        county: "Durham",
        city: "Shildon",
    },
    {
        region: "North East",
        county: "Tyne and Wear",
        city: "South Shields",
    },
    {
        region: "North East",
        county: "Durham",
        city: "Spennymoor",
    },
    {
        region: "North East",
        county: "Durham",
        city: "Stanley",
    },
    {
        region: "North East",
        county: "Northumberland",
        city: "Stocksfield",
    },
    {
        region: "North East",
        county: "Cleveland",
        city: "Stockton-On-Tees",
    },
    {
        region: "North East",
        county: "Tyne and Wear",
        city: "Sunderland",
    },
    {
        region: "North East",
        county: "Durham",
        city: "Trimdon Station",
    },
    {
        region: "North East",
        county: "South Humberside",
        city: "Ulceby",
    },
    {
        region: "North East",
        county: "Tyne and Wear",
        city: "Wallsend",
    },
    {
        region: "North East",
        county: "Tyne and Wear",
        city: "Washington",
    },
    {
        region: "North East",
        county: "Tyne and Wear",
        city: "Whitley Bay",
    },
    {
        region: "North East",
        county: "Durham",
        city: "Wingate",
    },
    {
        region: "North East",
        county: "North Humberside",
        city: "Withernsea",
    },
    {
        region: "North East",
        county: "Northumberland",
        city: "Wooler",
    },
    {
        region: "North East",
        county: "Northumberland",
        city: "Wylam",
    },
    {
        region: "North East",
        county: "Cleveland",
        city: "Yarm",
    },
    {
        region: "East of England",
        county: "Suffolk",
        city: "Aldeburgh",
    },
    {
        region: "East of England",
        county: "Norfolk",
        city: "Attleborough",
    },
    {
        region: "East of England",
        county: "Suffolk",
        city: "Beccles",
    },
    {
        region: "East of England",
        county: "Suffolk",
        city: "Brandon",
    },
    {
        region: "East of England",
        county: "Suffolk",
        city: "Bungay",
    },
    {
        region: "East of England",
        county: "Suffolk",
        city: "Bures",
    },
    {
        region: "East of England",
        county: "Suffolk",
        city: "Bury St. Edmunds",
    },
    {
        region: "East of England",
        county: "Cambridgeshire",
        city: "Cambridge",
    },
    {
        region: "East of England",
        county: "Cambridgeshire",
        city: "Chatteris",
    },
    {
        region: "East of England",
        county: "Norfolk",
        city: "Cromer",
    },
    {
        region: "East of England",
        county: "Norfolk",
        city: "Dereham",
    },
    {
        region: "East of England",
        county: "Norfolk",
        city: "Diss",
    },
    {
        region: "East of England",
        county: "Norfolk",
        city: "Downham Market",
    },
    {
        region: "East of England",
        county: "Cambridgeshire",
        city: "Ely",
    },
    {
        region: "East of England",
        county: "Suffolk",
        city: "Eye",
    },
    {
        region: "East of England",
        county: "Norfolk",
        city: "Fakenham",
    },
    {
        region: "East of England",
        county: "Suffolk",
        city: "Felixstowe",
    },
    {
        region: "East of England",
        county: "Norfolk",
        city: "Great Yarmouth",
    },
    {
        region: "East of England",
        county: "Suffolk",
        city: "Halesworth",
    },
    {
        region: "East of England",
        county: "Norfolk",
        city: "Harleston",
    },
    {
        region: "East of England",
        county: "Suffolk",
        city: "Haverhill",
    },
    {
        region: "East of England",
        county: "Norfolk",
        city: "Holt",
    },
    {
        region: "East of England",
        county: "Norfolk",
        city: "Hunstanton",
    },
    {
        region: "East of England",
        county: "Cambridgeshire",
        city: "Huntingdon",
    },
    {
        region: "East of England",
        county: "Suffolk",
        city: "Ipswich",
    },
    {
        region: "East of England",
        county: "Norfolk",
        city: "King's Lynn",
    },
    {
        region: "East of England",
        county: "Suffolk",
        city: "Leiston",
    },
    {
        region: "East of England",
        county: "Suffolk",
        city: "Lowestoft",
    },
    {
        region: "East of England",
        county: "Cambridgeshire",
        city: "March",
    },
    {
        region: "East of England",
        county: "Norfolk",
        city: "Melton Constable",
    },
    {
        region: "East of England",
        county: "Suffolk",
        city: "Newmarket",
    },
    {
        region: "East of England",
        county: "Norfolk",
        city: "North Walsham",
    },
    {
        region: "East of England",
        county: "Norfolk",
        city: "Norwich",
    },
    {
        region: "East of England",
        county: "Cambridgeshire",
        city: "Peterborough",
    },
    {
        region: "East of England",
        county: "Norfolk",
        city: "Sandringham",
    },
    {
        region: "East of England",
        county: "Suffolk",
        city: "Saxmundham",
    },
    {
        region: "East of England",
        county: "Norfolk",
        city: "Sheringham",
    },
    {
        region: "East of England",
        county: "Suffolk",
        city: "Southwold",
    },
    {
        region: "East of England",
        county: "Cambridgeshire",
        city: "St. Ives",
    },
    {
        region: "East of England",
        county: "Cambridgeshire",
        city: "St. Neots",
    },
    {
        region: "East of England",
        county: "Suffolk",
        city: "Stowmarket",
    },
    {
        region: "East of England",
        county: "Suffolk",
        city: "Sudbury",
    },
    {
        region: "East of England",
        county: "Norfolk",
        city: "Swaffham",
    },
    {
        region: "East of England",
        county: "Norfolk",
        city: "Thetford",
    },
    {
        region: "East of England",
        county: "Norfolk",
        city: "Walsingham",
    },
    {
        region: "East of England",
        county: "Norfolk",
        city: "Wells-Next-The-Sea",
    },
    {
        region: "East of England",
        county: "Cambridgeshire",
        city: "Wisbech",
    },
    {
        region: "East of England",
        county: "Suffolk",
        city: "Woodbridge",
    },
    {
        region: "East of England",
        county: "Norfolk",
        city: "Wymondham",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Barking",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Benfleet",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Billericay",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Braintree",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Brentwood",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Buckhurst Hill",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Burnham-On-Crouch",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Canvey Island",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Chelmsford",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Chigwell",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Clacton-On-Sea",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Colchester",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Dagenham",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Dunmow",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Epping",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Frinton-On-Sea",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Grays",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Halstead",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Harlow",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Harwich",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Hockley",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Hornchurch",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Ilford",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Ingatestone",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Leigh-On-Sea",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Loughton",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Maldon",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Manningtree",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Ongar",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Purfleet",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Rainham",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Rayleigh",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Rochford",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Romford",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Saffron Walden",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "South Ockendon",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Southend-On-Sea",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Southminster",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Stanford-Le-Hope",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Stansted",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Tilbury",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Upminster",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Waltham Abbey",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Walton On The Naze",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Westcliff-On-Sea",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Wickford",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Witham",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Woodford Green",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Thurrock",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Basildon",
    },
    {
        region: "East of England",
        county: "Essex",
        city: "Tendring",
    },
    {
        region: "East Midlands",
        county: "Lincolnshire",
        city: "Alford",
    },
    {
        region: "East Midlands",
        county: "Derbyshire",
        city: "Alfreton",
    },
    {
        region: "East Midlands",
        county: "Derbyshire",
        city: "Ashbourne",
    },
    {
        region: "East Midlands",
        county: "Leicestershire",
        city: "Ashby-De-La-Zouch",
    },
    {
        region: "East Midlands",
        county: "Derbyshire",
        city: "Bakewell",
    },
    {
        region: "East Midlands",
        county: "Derbyshire",
        city: "Belper",
    },
    {
        region: "East Midlands",
        county: "Lincolnshire",
        city: "Boston",
    },
    {
        region: "East Midlands",
        county: "Lincolnshire",
        city: "Bourne",
    },
    {
        region: "East Midlands",
        county: "Northamptonshire",
        city: "Brackley",
    },
    {
        region: "East Midlands",
        county: "Derbyshire",
        city: "Buxton",
    },
    {
        region: "East Midlands",
        county: "Derbyshire",
        city: "Chesterfield",
    },
    {
        region: "East Midlands",
        county: "Leicestershire",
        city: "Coalville",
    },
    {
        region: "East Midlands",
        county: "Northamptonshire",
        city: "Corby",
    },
    {
        region: "East Midlands",
        county: "Northamptonshire",
        city: "Daventry",
    },
    {
        region: "East Midlands",
        county: "Derbyshire",
        city: "Derby",
    },
    {
        region: "East Midlands",
        county: "Derbyshire",
        city: "Dronfield",
    },
    {
        region: "East Midlands",
        county: "Lincolnshire",
        city: "Gainsborough",
    },
    {
        region: "East Midlands",
        county: "Derbyshire",
        city: "Glossop",
    },
    {
        region: "East Midlands",
        county: "Lincolnshire",
        city: "Grantham",
    },
    {
        region: "East Midlands",
        county: "Derbyshire",
        city: "Heanor",
    },
    {
        region: "East Midlands",
        county: "Derbyshire",
        city: "High Peak",
    },
    {
        region: "East Midlands",
        county: "Leicestershire",
        city: "Hinckley",
    },
    {
        region: "East Midlands",
        county: "Derbyshire",
        city: "Hope Valley",
    },
    {
        region: "East Midlands",
        county: "Lincolnshire",
        city: "Horncastle",
    },
    {
        region: "East Midlands",
        county: "Leicestershire",
        city: "Ibstock",
    },
    {
        region: "East Midlands",
        county: "Derbyshire",
        city: "Ilkeston",
    },
    {
        region: "East Midlands",
        county: "Northamptonshire",
        city: "Kettering",
    },
    {
        region: "East Midlands",
        county: "Leicestershire",
        city: "Leicester",
    },
    {
        region: "East Midlands",
        county: "Lincolnshire",
        city: "Lincoln",
    },
    {
        region: "East Midlands",
        county: "Leicestershire",
        city: "Loughborough",
    },
    {
        region: "East Midlands",
        county: "Lincolnshire",
        city: "Louth",
    },
    {
        region: "East Midlands",
        county: "Leicestershire",
        city: "Lutterworth",
    },
    {
        region: "East Midlands",
        county: "Lincolnshire",
        city: "Mablethorpe",
    },
    {
        region: "East Midlands",
        county: "Nottinghamshire",
        city: "Mansfield",
    },
    {
        region: "East Midlands",
        county: "Leicestershire",
        city: "Market Harborough",
    },
    {
        region: "East Midlands",
        county: "Lincolnshire",
        city: "Market Rasen",
    },
    {
        region: "East Midlands",
        county: "Leicestershire",
        city: "Markfield",
    },
    {
        region: "East Midlands",
        county: "Derbyshire",
        city: "Matlock",
    },
    {
        region: "East Midlands",
        county: "Leicestershire",
        city: "Melton Mowbray",
    },
    {
        region: "East Midlands",
        county: "Nottinghamshire",
        city: "Newark",
    },
    {
        region: "East Midlands",
        county: "Northamptonshire",
        city: "Northampton",
    },
    {
        region: "East Midlands",
        county: "Nottinghamshire",
        city: "Nottingham",
    },
    {
        region: "East Midlands",
        county: "Leicestershire",
        city: "Oakham",
    },
    {
        region: "East Midlands",
        county: "Nottinghamshire",
        city: "Retford",
    },
    {
        region: "East Midlands",
        county: "Derbyshire",
        city: '"Ripley, Derbyshire"',
    },
    {
        region: "East Midlands",
        county: "Northamptonshire",
        city: "Rushden",
    },
    {
        region: "East Midlands",
        county: "Lincolnshire",
        city: "Skegness",
    },
    {
        region: "East Midlands",
        county: "Lincolnshire",
        city: "Sleaford",
    },
    {
        region: "East Midlands",
        county: "Nottinghamshire",
        city: "Southwell",
    },
    {
        region: "East Midlands",
        county: "Lincolnshire",
        city: "Spalding",
    },
    {
        region: "East Midlands",
        county: "Lincolnshire",
        city: "Spilsby",
    },
    {
        region: "East Midlands",
        county: "Lincolnshire",
        city: "Stamford",
    },
    {
        region: "East Midlands",
        county: "Nottinghamshire",
        city: "Sutton-In-Ashfield",
    },
    {
        region: "East Midlands",
        county: "Derbyshire",
        city: "Swadlincote",
    },
    {
        region: "East Midlands",
        county: "Northamptonshire",
        city: "Towcester",
    },
    {
        region: "East Midlands",
        county: "Northamptonshire",
        city: "Wellingborough",
    },
    {
        region: "East Midlands",
        county: "Leicestershire",
        city: "Wigston",
    },
    {
        region: "East Midlands",
        county: "Lincolnshire",
        city: "Woodhall Spa",
    },
    {
        region: "East Midlands",
        county: "Nottinghamshire",
        city: "Worksop",
    },
    { name: "Brent" },
    { name: "Harrow" },
    { name: "Ealing" },
    { name: "Hammersmith and Fulham" },
    { name: "Hounslow" },
    { name: "Richmond" },
    { name: "Hillingdon" },
    {
        name: "Bexley",
        postcodeAreas: "DA, SE",
        subRegion: "South East",
        assembly: "Bexley and Bromley",
        historicCounty: "Kent",
        innerOuter: "Outer",
    },
    {
        name: "Bromley",
        postcodeAreas: "BR, DA, SE, TN, CR",
        subRegion: "South East",
        assembly: "Bexley and Bromley",
        historicCounty: "Kent",
        innerOuter: "Outer",
    },
    {
        name: "Croydon",
        postcodeAreas: "CR, SE, SW, BR",
        subRegion: "South West",
        assembly: "Croydon and Sutton",
        historicCounty: "Surrey",
        innerOuter: "Outer",
    },
    {
        name: "Greenwich",
        postcodeAreas: "SE, DA, BR",
        subRegion: "South East",
        assembly: "Greenwich and Lewisham",
        historicCounty: "Kent",
        innerOuter: "Inner",
    },
    {
        name: "Kingston",
        postcodeAreas: "KT, SW, TW",
        subRegion: "South West",
        assembly: "South West",
        historicCounty: "Surrey",
        innerOuter: "Outer",
    },
    {
        name: "Lewisham",
        postcodeAreas: "SE, BR",
        subRegion: "South East",
        assembly: "Greenwich and Lewisham",
        historicCounty: "Kent",
        innerOuter: "Inner",
    },
    {
        name: "Merton",
        postcodeAreas: "CR, KT, SM, SW",
        subRegion: "South West",
        assembly: "Merton and Wandsworth",
        historicCounty: "Surrey",
        innerOuter: "Outer",
    },
    {
        name: "Richmond",
        postcodeAreas: "SW, TW",
        subRegion: "South West",
        assembly: "South West",
        historicCounty: "Surrey",
        innerOuter: "Outer",
    },
    {
        name: "Sutton",
        postcodeAreas: "CR, KT, SM",
        subRegion: "South West",
        assembly: "Croydon and Sutton",
        historicCounty: "Surrey",
        innerOuter: "Outer",
    },
    {
        name: "Wandsworth",
        postcodeAreas: "SW",
        subRegion: "South West",
        assembly: "Merton and Wandsworth",
        historicCounty: "Surrey",
        innerOuter: "Inner",
    },
    { name: "Barking and Dagenham" },
    { name: "Barnet" },
    { name: "Bexley" },
    { name: "Brent" },
    { name: "Bromley" },
    { name: "Croydon" },
    { name: "Ealing" },
    { name: "Enfield" },
    { name: "Haringey" },
    { name: "Harrow" },
    { name: "Havering" },
    { name: "Hillingdon" },
    { name: "Hounslow" },
    { name: "Kingston upon Thames" },
    { name: "Merton" },
    { name: "Newham" },
    { name: "Redbridge" },
    { name: "Richmond upon Thames" },
    { name: "Sutton" },
    { name: "Waltham Forest" },
    {
        name: "Barking and Dagenham",
        postcodeAreas: "IG, RM, E",
        subRegion: "East",
        assembly: "City and East",
    },
    {
        name: "Barnet",
        postcodeAreas: "EN, HA, N, NW",
        subRegion: "North",
        assembly: "Barnet and Camden",
    },
    {
        name: "Brent",
        postcodeAreas: "HA, NW, W",
        subRegion: "West",
        assembly: "Brent and Harrow",
    },
    {
        name: "Camden",
        postcodeAreas: "EC, WC, N, NW, W",
        subRegion: "Central",
        assembly: "Barnet and Camden",
    },
    {
        name: "Ealing",
        postcodeAreas: "UB, W, NW",
        subRegion: "West",
        assembly: "Ealing and Hillingdon",
    },
    {
        name: "Enfield",
        postcodeAreas: "EN, N",
        subRegion: "North",
        assembly: "Enfield and Haringey",
    },
    {
        name: "Hammersmith Fulham",
        postcodeAreas: "SW, W, NW",
        subRegion: "West",
        assembly: "West Central",
    },
    {
        name: "Haringey",
        postcodeAreas: "N",
        subRegion: "North",
        assembly: "Enfield and Haringey",
    },
    {
        name: "Harrow",
        postcodeAreas: "HA, UB, NW",
        subRegion: "West",
        assembly: "Brent and Harrow",
    },
    {
        name: "Havering",
        postcodeAreas: "RM, CM",
        subRegion: "East",
        assembly: "Havering and Redbridge",
    },
    {
        name: "Hillingdon",
        postcodeAreas: "HA, TW, UB, WD",
        subRegion: "West",
        assembly: "Ealing and Hillingdon",
    },
    {
        name: "Hounslow",
        postcodeAreas: "TW, W, UB",
        subRegion: "West",
        assembly: "South West",
    },
    {
        name: "Newham",
        postcodeAreas: "E",
        subRegion: "East",
        assembly: "City and East",
    },
    {
        name: "Redbridge",
        postcodeAreas: "E, IG, RM",
        subRegion: "East",
        assembly: "Havering and Redbridge",
    },
    {
        name: "Waltham Forest",
        postcodeAreas: "E, IG",
        subRegion: "East",
        assembly: "North East",
    },
    { name: "Greenwich" },
    { name: "Hackney" },
    { name: "Hammersmith and Fulham" },
    { name: "Islington" },
    { name: "Kensington and Chelsea" },
    { name: "Lambeth" },
    { name: "Lewisham" },
    { name: "Southwark" },
    { name: "Tower Hamlets" },
    { name: "Wandsworth" },
    { name: "Westminster" },
    {
        name: "Barking and Dagenham",
        assembly: "City and East",
        innerOuter: "Outer",
    },
    {
        name: "Hackney",
        assembly: "North East",
        innerOuter: "Inner",
    },
    {
        name: "Havering",
        assembly: "Havering and Redbridge",
        innerOuter: "Outer",
    },
    {
        name: "Newham",
        assembly: "City and East",
        innerOuter: "Outer",
    },
    {
        name: "Redbridge",
        assembly: "Havering and Redbridge",
        innerOuter: "Outer",
    },
    {
        name: "Tower Hamlets",
        assembly: "City and East",
        innerOuter: "Inner",
    },
    {
        name: "Waltham Forest",
        assembly: "North East",
        innerOuter: "Outer",
    },
    { name: "Camden" },
    { name: "City of London" },
    {
        name: "Kensington and Chelsea",
        postcodeAreas: "W, SW",
        subRegion: "Central",
        assembly: "West Central",
    },
    {
        name: "Islington",
        postcodeAreas: "EC, WC, N",
        subRegion: "Central",
        assembly: "North East",
    },
    {
        name: "Lambeth",
        postcodeAreas: "SE, SW",
        subRegion: "South East",
        assembly: "Lambeth and Southwark",
        historicCounty: "Surrey",
        innerOuter: "Inner",
    },
    {
        name: "Southwark",
        postcodeAreas: "SE",
        subRegion: "South East",
        assembly: "Lambeth and Southwark",
        historicCounty: "Surrey",
        innerOuter: "Inner",
    },
    {
        name: "Westminster",
        postcodeAreas: "NW, SW, WC, W",
        subRegion: "Central",
        assembly: "West Central",
    },
];

// Function to flatten and remove duplicates for any field names
function getUniqueItemsFromAnyFields(array) {
    // Extract all values from each object
    const flattened = array.flatMap((item) => Object.values(item));

    // Create a Set to automatically remove duplicates and convert it back to an array
    const uniqueItems = [...new Set(flattened)];

    return uniqueItems;
}

// Call the function to get unique locations
const uniqueLocations = getUniqueItemsFromAnyFields(locations);

// Specify the output file name
const outputFileName = "uniqueLocations.json";

// Write the output to a file
fs.writeFile(
    outputFileName,
    JSON.stringify(uniqueLocations, null, 2),
    (err) => {
        if (err) {
            console.error("Error writing to file", err);
        } else {
            console.log(`Unique locations written to ${outputFileName}`);
        }
    }
);
