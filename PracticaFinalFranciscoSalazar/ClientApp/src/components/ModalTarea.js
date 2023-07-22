import { useEffect, useState } from "react"
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"

const modeloTarea = {
    id: 0,
    nombre: "",
    descripcion: "",
    completado: 0
}

const ModalTarea = ({ mostrarModal, setMostrarModal, guardarTarea, editar, setEditar, editarTarea }) => {

    const [tarea, setTarea] = useState(modeloTarea);

    const actualizaDato = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setTarea(
            {
                ...tarea,
                [e.target.name]: e.target.value
            }
        )
    }

    const actualizaCheck = (dato) => {
        setTarea({
            ...tarea,
            completado: dato
        });
    }

    const enviarDatos = () => {

        if (tarea.id == 0) {
            guardarTarea(tarea)
        } else {
            editarTarea(tarea)
        }

    }

    useEffect(() => {
        if (editar != null) {
            setTarea(editar)
        } else {
            setTarea(modeloTarea)
        }

    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }



    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {tarea.id == 0 ? "Nueva Tarea" : "Editar Tarea"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizaDato(e)} value={tarea.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Descripcion</Label>
                        <Input name="descripcion" onChange={(e) => actualizaDato(e)} value={tarea.descripcion} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Completado</Label>
                        <Input
                            type="checkbox"
                            name="completado"
                            onChange={(e) => actualizaCheck(e.target.checked ? 1 : 0)}
                            checked={tarea.completado === 1}
                        />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalTarea;