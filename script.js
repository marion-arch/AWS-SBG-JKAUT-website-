// 1. Replace these with your actual keys from Supabase Dashboard -> Settings -> API
const SUPABASE_URL = 'YOUR_SUPABASE_PROJECT_URL'
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'

// 2. Initialize the Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// 3. Fetch data from the countries table
async function loadCountries() {
  const { data, error } = await supabase
    .from('countries')
    .select('*')

  if (error) {
    console.error('Error fetching data:', error.message)
    return
  }

  console.log('Data received:', data)

  // 4. Inject the data into the HTML list
  const listElement = document.getElementById('country-list')
  if (listElement) {
    listElement.innerHTML = data.map(item => `<li>${item.name}</li>`).join('')
  }
}

// 5. Run the function as soon as the page loads
loadCountries()