const express = require('express');
const path = require('path');
const app = express();
const PORT = 3040;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Datos de ejemplo para F1 Fantasy 2025
const drivers = [
  { 
    id: 1, 
    name: 'Oscar Piastri', 
    team: 'McLaren', 
    price: 16.8, 
    number: 81, 
    nationality: 'Australia',
    image: 'https://www.formula1.com/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/1col/image.png'
  },
  { 
    id: 2, 
    name: 'Lando Norris', 
    team: 'McLaren', 
    price: 17.5, 
    number: 4, 
    nationality: 'United Kingdom',
    image: 'https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/1col/image.png'
  },
  { 
    id: 3, 
    name: 'Max Verstappen', 
    team: 'Red Bull Racing', 
    price: 19.5, 
    number: 1, 
    nationality: 'Netherlands',
    image: 'https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png'
  },
  { 
    id: 4, 
    name: 'George Russell', 
    team: 'Mercedes', 
    price: 15.2, 
    number: 63, 
    nationality: 'United Kingdom',
    image: 'https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/1col/image.png'
  },
  { 
    id: 5, 
    name: 'Charles Leclerc', 
    team: 'Ferrari', 
    price: 17.8, 
    number: 16, 
    nationality: 'Monaco',
    image: 'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/1col/image.png'
  },
  { 
    id: 6, 
    name: 'Kimi Antonelli', 
    team: 'Mercedes', 
    price: 12.5, 
    number: 12, 
    nationality: 'Italy',
    image: 'https://images.ctfassets.net/1fvlg6xqnm65/5YiTw6xQHuM94ty9yLDnyk/ff67d40c690940307f48d1b370352577/Kimi_Antonelli.png'
  },
  { 
    id: 7, 
    name: 'Lewis Hamilton', 
    team: 'Ferrari', 
    price: 18.2, 
    number: 44, 
    nationality: 'United Kingdom',
    image: 'https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/1col/image.png'
  },
  { 
    id: 8, 
    name: 'Alexander Albon', 
    team: 'Williams', 
    price: 10.8, 
    number: 23, 
    nationality: 'Thailand',
    image: 'https://www.formula1.com/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/1col/image.png'
  },
  { 
    id: 9, 
    name: 'Esteban Ocon', 
    team: 'Haas', 
    price: 11.5, 
    number: 31, 
    nationality: 'France',
    image: 'https://www.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/1col/image.png'
  },
  { 
    id: 10, 
    name: 'Lance Stroll', 
    team: 'Aston Martin', 
    price: 9.2, 
    number: 18, 
    nationality: 'Canada',
    image: 'https://www.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/1col/image.png'
  },
  { 
    id: 11, 
    name: 'Yuki Tsunoda', 
    team: 'Red Bull Racing', 
    price: 10.3, 
    number: 22, 
    nationality: 'Japan',
    image: 'https://www.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/1col/image.png'
  },
  { 
    id: 12, 
    name: 'Pierre Gasly', 
    team: 'Alpine', 
    price: 11.8, 
    number: 10, 
    nationality: 'France',
    image: 'https://www.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/1col/image.png'
  },
  { 
    id: 13, 
    name: 'Carlos Sainz', 
    team: 'Williams', 
    price: 14.7, 
    number: 55, 
    nationality: 'Spain',
    image: 'https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/1col/image.png'
  },
  { 
    id: 14, 
    name: 'Nico Hulkenberg', 
    team: 'Kick Sauber', 
    price: 9.5, 
    number: 27, 
    nationality: 'Germany',
    image: 'https://www.formula1.com/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/1col/image.png'
  },
  { 
    id: 15, 
    name: 'Oliver Bearman', 
    team: 'Haas', 
    price: 8.5, 
    number: 87, 
    nationality: 'United Kingdom',
    image: 'https://soymotor.com/sites/default/files/2025-03/obearman_2025.png'
  },
  { 
    id: 16, 
    name: 'Isack Hadjar', 
    team: 'Racing Bulls', 
    price: 7.8, 
    number: 6, 
    nationality: 'France',
    image: 'https://e0.365dm.com/f1/drivers/256x256/h_full_1551.png'
  },
  { 
    id: 17, 
    name: 'Fernando Alonso', 
    team: 'Aston Martin', 
    price: 13.1, 
    number: 14, 
    nationality: 'Spain',
    image: 'https://www.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/1col/image.png'
  },
  { 
    id: 18, 
    name: 'Liam Lawson', 
    team: 'Racing Bulls', 
    price: 8.2, 
    number: 30, 
    nationality: 'New Zealand',
    image: 'https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiJmMW1hbmFnZXIvMjAyMy9kcml2ZXJzL2hlYWRzaG90cy9mMS9sYXcucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDB9fX0='
  },
  { 
    id: 19, 
    name: 'Jack Doohan', 
    team: 'Alpine', 
    price: 7.5, 
    number: 7, 
    nationality: 'Australia',
    image: 'https://soymotor.com/sites/default/files/2025-03/jdoohan_2025.png'
  },
  { 
    id: 20, 
    name: 'Gabriel Bortoleto', 
    team: 'Kick Sauber', 
    price: 7.0, 
    number: 5, 
    nationality: 'Brazil',
    image: 'https://e0.365dm.com/f1/drivers/256x256/h_full_1568.png'
  }
];

const teams = [
  { 
    id: 1, 
    name: 'McLaren', 
    price: 32.5,
    image: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/mclaren-logo.png'
  },
  { 
    id: 2, 
    name: 'Ferrari', 
    price: 34.8,
    image: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/ferrari-logo.png'
  },
  { 
    id: 3, 
    name: 'Red Bull Racing', 
    price: 36.2,
    image: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/red-bull-racing-logo.png'
  },
  { 
    id: 4, 
    name: 'Mercedes', 
    price: 28.9,
    image: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/mercedes-logo.png'
  },
  { 
    id: 5, 
    name: 'Aston Martin', 
    price: 22.1,
    image: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/aston-martin-logo.png'
  },
  { 
    id: 6, 
    name: 'Alpine', 
    price: 19.3,
    image: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/alpine-logo.png'
  },
  { 
    id: 7, 
    name: 'Williams', 
    price: 25.4,
    image: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/williams-logo.png'
  },
  { 
    id: 8, 
    name: 'Racing Bulls', 
    price: 16.0,
    image: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/rb-logo.png'
  },
  { 
    id: 9, 
    name: 'Haas', 
    price: 23.0,
    image: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/haas-f1-team-logo.png'
  },
  { 
    id: 10, 
    name: 'Kick Sauber', 
    price: 16.5,
    image: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/kick-sauber-logo.png'
  }
];

// Rutas API
app.get('/api/drivers', (req, res) => {
    res.json(drivers);
});

app.get('/api/teams', (req, res) => {
    res.json(teams);
});

app.post('/api/team', (req, res) => {
    const { selectedDrivers, selectedTeam } = req.body;
    
    // Validar presupuesto
    const totalCost = selectedDrivers.reduce((sum, driverId) => {
        const driver = drivers.find(d => d.id === driverId);
        return sum + (driver ? driver.price : 0);
    }, 0) + (teams.find(t => t.id === selectedTeam)?.price || 0);
    
    if (totalCost > 100) {
        return res.status(400).json({ error: 'Presupuesto excedido' });
    }
    
    res.json({ 
        message: 'Equipo guardado exitosamente',
        totalCost: totalCost,
        drivers: selectedDrivers,
        team: selectedTeam
    });
});

// Servir el archivo HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});