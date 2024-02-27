import { AiFillDelete } from "react-icons/ai"
import { FaEdit } from "react-icons/fa"
import axios from "axios"
import EditTutorial from "./EditTutorial"

const TutorialList = ({tutorials, getTutorials}) => {

  //* mock data
  // const tutorials = [
  //   {
  //     id: 1,
  //     title: "JS",
  //     description: "JS is a programming language",
  //   },
  //   {
  //     id: 2,
  //     title: "React",
  //     description: "JS library for UI design",
  //   },
  //   {
  //     id: 3,
  //     title: "SolidJS",
  //     description: "JS library for UI design",
  //   },
  // ]

  const deleteTutorial = async (id) => {
    try {
      const res = await axios.delete(`${process.env.REACT_APP_URL} ${id}/`)
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
    getTutorials()
  }

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    className="me-2 text-warning"
                    data-bs-toggle = "modal"
                    data-bs-target = "#open-modal"
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick = {() => deleteTutorial(id)}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <EditTutorial />
    </div>
  )
}

export default TutorialList
