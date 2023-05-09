import "./MainPage.css"
import React from 'react'
import { Input, Space } from "antd";
import { Route,Routes } from "react-router-dom";
import Allvedios from "../MainRoute/Allvedios";
import Profile from "../MainRoute/Profile";
import Baykurs from "../kurslar/Baykurs";
import Hisoblar from "../MainRoute/Hisoblar";
import Listkurs from "../MainRoute/Listkurs";
import Seekurs from "../MainRoute/Seekurs";
import Vediosinonekurs from "../MainRoute/Vediosinonekurs";
import Hisoblarpulyichish from "../MainRoute/Hisoblarpulyichish";
import Pulyichishok from "../MainRoute/Pulyichishok";
import Freekurs from "../MainRoute/Freekurs";
import Moneykurs from "../MainRoute/Moneykurs";
import Updatekurs from "../MainRoute/Updatekurs";
import Kurss from "../kurslar/Kurss";
import Createkurs from "../MainRoute/Createkurs";
import Updateonekurs from "../MainRoute/Updateonekurs";
function MainPage() {
    return (
        <div className="homepage">
            <Routes>
                <Route path="/" element={<Allvedios />}/>
                <Route path="/seekurs:kursId" element={<Seekurs />}/>
                <Route path="/vediosinonekurs" element={<Vediosinonekurs />}/>
                <Route path="/hisoblar" element={<Hisoblar />} />
                <Route path="/hisoblar/pulyichish" element={<Hisoblarpulyichish />} />
                <Route path="/hisoblar/pulyichish/ok" element={<Pulyichishok />} />
                <Route path="/Kurs/:id" element={<Kurss />} />
                <Route path="/kurs/" element={<Createkurs />} />
                <Route path="/kurs/free" element={<Freekurs />} />
                <Route path="/kurs/money" element={<Moneykurs />} />
                <Route path="/update/kurs/" element={<Updatekurs />} />
                <Route path="/update/kurs/:Id" element={<Updateonekurs />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    )
}

export default MainPage