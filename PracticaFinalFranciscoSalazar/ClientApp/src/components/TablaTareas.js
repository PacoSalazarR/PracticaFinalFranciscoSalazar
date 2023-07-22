import { Button, Table } from "reactstrap"

const TablaTareas = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarTarea }) => {

    const enviarDatos = (tarea) => {
        setEditar(tarea)
        setMostrarModal(!mostrarModal)
    }

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Completado</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="4">Sin registros</td>
                        </tr>
                    ) : (
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nombre}</td>
                                <td>{item.descripcion}</td>
                                <td>{item.completado ? "sip" : "nope"}</td>
                                <td>
                                    <Button color="primary" size="sm" className="me-2" onClick={() => enviarDatos(item)}>Editar</Button>
                                    <Button color="danger" size="sm" onClick={() => eliminarTarea(item.id)}>Eliminar</Button>
                                </td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </Table>
    )
}

export default TablaTareas;