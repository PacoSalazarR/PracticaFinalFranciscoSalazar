import { Button, Table } from "reactstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import "./stylesTabla.css"

const TablaTareas = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarTarea }) => {

    const enviarDatos = (tarea) => {
        setEditar(tarea)
        setMostrarModal(!mostrarModal)
    }

    return (
        <Table striped className="custom-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Completado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.length < 1 ? (
                    <tr>
                        <td colSpan="5">Sin registros</td>
                    </tr>
                ) : (
                    data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nombre}</td>
                            <td>{item.descripcion}</td>
                            <td>
                                {item.completado ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />}
                            </td>
                            <td>
                                <Button
                                    color="primary"
                                    size="sm"
                                    className="btn-editar"
                                    onClick={() => enviarDatos(item)}
                                >
                                    <FontAwesomeIcon icon={faPencilAlt} />
                                </Button>
                                <Button color="danger" size="sm" onClick={() => eliminarTarea(item.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </Table>
    )
}

export default TablaTareas;