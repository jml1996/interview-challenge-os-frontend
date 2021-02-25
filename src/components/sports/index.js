
const labels = [
    { label: "Golf" },
    { label: "Tennis" },
    { label: "Cricket" },
    { label: "Basketball" },
    { label: "Baseball" },
    { label: "American Football" },
    { label: "Aquatics" },
    { label: "Archery" },
    { label: "Automobile Racing" },
    { label: "Badminton" },
    { label: "Beach Volleyball" },
    { label: "Bobsleigh" },
    { label: "Body Building" },
    { label: "Boxing" },
    { label: "Cross Country Running" },
    { label: "Cross Country Skiing" },
    { label: "Curling" },
    { label: "Cycling" },
    { label: "Darts" },
    { label: "Decathlon" },
    { label: "Down Hill Skiing" },
    { label: "Equestrianism" },
    { label: "eSports" },
    { label: "Fencing" },
    { label: "Field Hockey" },
    { label: "Figure Skating" },
    { label: "Gymnastics" },
    { label: "Ice Hockey" },
    { label: "Martial Arts" },
    { label: "Mixed Martial Arts" },
    { label: "Modern Pentathlon" },
    { label: "Motorcycle Racing" },
    { label: "Netball" },
    { label: "Polo" },
    { label: "Racquetball" },
    { label: "Rowing" },
    { label: "Rugby" },
    { label: "Sailing" },
    { label: "Softball" },
    { label: "Shooting" },
    { label: "Skateboarding" },
    { label: "Skeet Shooting" },
    { label: "Skeleton" },
    { label: "Snow Boarding" },
    { label: "Soccer (Football)" },
    { label: "Squash" },
    { label: "Surfing" },
    { label: "Swimming" },
    { label: "Track and Field" },
]

const sports = labels.map((sport, index) => {
    return {
        ...sport,
        id: index
    }
})

export default sports;

