import axios from 'axios'

const searchIssues = async () => {
  try {
    const response = await axios.get(`https://api.github.com/repos/facebook/react/issues`)
    return response.data
  } catch (error) {
    return []
  }
}

export default searchIssues