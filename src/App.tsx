import { Header, Search, Select, Country, Card } from "./components";

function App() {
  return (
    <main>
      <Header />

      <div className="p-4 flex flex-col gap-10">
        <Card>
          <Search />
        </Card>

        <div>
          <Select
            placeholder="Filter by Region"
            options={[
              { label: "Africa", value: "Africa" },
              { label: "America", value: "America" },
              { label: "Asia", value: "Asia" },
              { label: "Europe", value: "Europe" },
              { label: "Oceania", value: "Oceania" },
            ]}
          />

          <ul>
            {/* <li>
            <Card>
              <Country />
            </Card>
          </li> */}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
