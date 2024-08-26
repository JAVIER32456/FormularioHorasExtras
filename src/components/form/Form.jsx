import React, {useState} from 'react'
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { RadioGroup, Radio, FormControlLabel, FormControl, Alert } from '@mui/material';
import './form.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


const Form = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const [alertaVisible, setAlertaVisible] = useState(false);
  const [proceso, setProceso] = useState('');
  const [otroProceso, setOtroProceso] = useState('');
  const [cordinador, setCordinador] = useState('');
  const [otroCordinador, setOtroCordinador] = useState('');
  const [ticket, setTicket] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [date, setDate] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);
  const [nombre, setNombre ] = useState('');
  const [cedula, setCedula] = useState('');
  const [nombre2, setNombre2 ] = useState('');
  const [cedula2, setCedula2] = useState('');
  const [nombre3, setNombre3 ] = useState('');
  const [cedula3, setCedula3] = useState('');
  const [nombre4, setNombre4 ] = useState('');
  const [cedula4, setCedula4] = useState('');
  const [observacion, setObservacion] = useState('');

  const [errors, setErrors] = useState({
    proceso: false,
    otroProceso: false,
    cordinador: false,
    otroCordinador: false,
    ticket: false,
    localidad: false,
    date: null,
    dateEnd: null,
    nombre: false,
    cedula: false,
    nombre2: false,
    cedula2: false,
    nombre3: false,
    cedula3: false,
    nombre4: false,
    cedula4: false,
    observacion: false,
  });


  const validateFields = () => {
    const errorsCopy = { ...errors };
    let hasError = false;

    if (proceso.trim() === '') {
      errorsCopy.proceso = true;
      hasError = true;
    } else {
      errorsCopy.proceso = false;
    }

    if (cordinador.trim() === '') {
      errorsCopy.cordinador = true;
      hasError = true;
    } else {
      errorsCopy.cordinador = false;
    }

    if (ticket.trim() === '') {
      errorsCopy.ticket = true;
      hasError = true;
    } else {
      errorsCopy.ticket = false;
    }
    
    if (localidad.trim() === '') {
      errorsCopy.localidad = true;
      hasError = true;
    } else {
      errorsCopy.localidad = false;
    }

    if (!date) {
      errorsCopy.date = true;
      hasError = true;
    } else {
      errorsCopy.date = false;
    }
    if (!dateEnd) {
      errorsCopy.dateEnd = true;
      hasError = true;
    } else {
      errorsCopy.dateEnd = false;
    }


    if (nombre.trim() === '') {
      errorsCopy.nombre = true;
      hasError = true;
    } else {
      errorsCopy.nombre = false;
    }

    if (cedula.trim() === '') {
      errorsCopy.cedula = true;
      hasError = true;
    } else {
      errorsCopy.cedula = false;
    }
    // _________________________________________________

    if (nombre2.trim() === '') {
      errorsCopy.nombre2 = true;
      hasError = true;
    } else {
      errorsCopy.nombre2 = false;
    }

    if (cedula2.trim() === '') {
      errorsCopy.cedula2 = true;
      hasError = true;
    } else {
      errorsCopy.cedula2 = false;
    }

    // _________________________________________________

    if (observacion.trim() === '') {
      errorsCopy.observacion = true;
      hasError = true;
    } else {
      errorsCopy.observacion = false;
    }

    setErrors(errorsCopy);
    return hasError;
  };

  const handleProceso= (event) => {
    setProceso(event.target.value);
  };
  const handleOtroProceso = (event) => {
    const value = event.target.value;
    setOtroProceso(value);
    if (value.trim() !== '') {
      setProceso('otros');
    }
  };
  const handleCordinador = (value) => {
    setCordinador(value.target.value);
  };
  const handleOtroCordinador = (event) => {
    const value = event.target.value;
    setOtroCordinador(value);
    if (value.trim() !== '') {
      setCordinador('otros');
    }
  };
  const handleTicket =(event)=>{
    setTicket(event.target.value);
  }
  const handleLocalidad =(event)=>{
    setLocalidad(event.target.value);
  }
  const handleDate =(dateTime)=>{
    setDate(dateTime);
  }
  const handleDateEnd =(dateTimeEnd)=>{
    setDateEnd(dateTimeEnd);
  }
  const handleNombre =(event)=>{
    setNombre(event.target.value);
  }
  const handleCedula =(event)=>{
    setCedula(event.target.value);
  }
  const handleNombre2 =(event)=>{
    setNombre2(event.target.value);
  }
  const handleCedula2 =(event)=>{
    setCedula2(event.target.value);
  }
  const handleNombre3 =(event)=>{
    setNombre3(event.target.value);
  }
  const handleCedula3 =(event)=>{
    setCedula3(event.target.value);
  }
  const handleNombre4 =(event)=>{
    setNombre4(event.target.value);
  }
  const handleCedula4 =(event)=>{
    setCedula4(event.target.value);
  }
  const handleObservacion =(event)=>{
    setObservacion(event.target.value);
  }

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };


  const handleFechaInicial = (newDate) => {
    setDate(newDate);
  };
  const handleFechaFinal = (newDateF) => {
    setDateEnd(newDateF);
  };
  
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    const hasError = validateFields();
    if (hasError) {
      setAlertaVisible(true);
      return;
    }
    if (proceso.trim() === '' || (proceso === 'otros' && otroProceso.trim() === '')) {
      setErrors({ proceso: true });
      return;
    }
    if (cordinador.trim() === '' || (cordinador === 'otros' && otroCordinador.trim() === '')) {
      setErrors({ cordinador: true });
      return;
    }
    const selectedDate = date.toISOString(); // Esto te dará la fecha y hora en formato ISO (por ejemplo, "2022-12-31T23:59:59.999Z")
    const selectedDateEnd = dateEnd.toISOString();

    console.log('Proceso:', proceso);
    console.log('nombre Proceso:', otroProceso);
    console.log('Cordinador:', cordinador);
    console.log('nombre Cordinador:', otroCordinador);
    console.log('Ticket:', ticket);
    console.log('Localidad:', localidad);
    console.log('Fecha Inicial:', selectedDate);
    console.log('Fecha Final:', selectedDateEnd);
    console.log('Nombre:', nombre);
    console.log('Cedula:', cedula);
    console.log('Nombre 2:', nombre2);
    console.log('Cedula 2:', cedula2);
    console.log('Nombre 3:', nombre3);
    console.log('Cedula 3:', cedula3);
    console.log('Nombre 4:', nombre4);
    console.log('Cedula 4:', cedula4);
    console.log('Observacion:', observacion);
    alert('Datos enviados exitosamente');
    setAlertaVisible(false);

    setProceso('');
    setOtroProceso('');
    setCordinador('');
    setOtroCordinador('');
    setTicket('');
    setLocalidad('');
    setDate(null);
    setDateEnd(null);
    setNombre('');
    setCedula('');
    setNombre2('');
    setCedula2('');
    setNombre3('');
    setCedula3('');
    setNombre4('');
    setCedula4('');
    setObservacion('');
  }


  return (
      <div className='form'>
        <div className='form-container'>
          <div className='form-secciones-title'>
            <h1>Reporte Horas Extras</h1>
            <label htmlFor="usuario">Nombre de usuario</label>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='form-body'>
              <div className='form-secciones'>
                <label htmlFor="ticket">TICKET</label>
                <TextField 
                  type='text' 
                  id='nombre' 
                  label="Escribe aqui" 
                  variant="standard" 
                  value={ticket}
                  onChange={handleTicket}
                  fullWidth 
                  helperText={errors.ticket ? '* Este campo es obligatorio' : ''}
                  error={errors.ticket}
                />
              </div>
              <div className='form-secciones'>
                <label htmlFor="localidad">LOCALIDAD</label>
                <TextField 
                  type='text' 
                  id='Localidad' 
                  label="Escribe aqui" 
                  variant="standard" 
                  value={localidad}
                  onChange={handleLocalidad}
                  fullWidth 
                  helperText={errors.localidad ? '* Este campo es obligatorio' : ''}
                  error={errors.localidad}
                />
              </div>
              <div className='form-secciones'>
                <div className='form-date'>
                  <label htmlFor="fechaInicio">Fecha Incio Tiempo Extra</label>
                </div>
                <div className='form-date-hora'>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['MobileDateTimePicker']}>
                      <DateTimePicker 
                        label={'Fecha inicial'}
                        value={date}
                        onChange={handleFechaInicial}
                        renderInput={(props) => <TextField {...props} variant="standard" />}
                        openTo="day"
                      />
                      {errors.date && (
                        <p className="error-message">* Este campo es obligatorio</p>
                      )}
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>
              <div className='form-secciones'>
                <div className='form-date'>
                  <label htmlFor="fechaFin">Fecha fin Tiempo Extra</label>
                </div>
                <div className='form-date-hora'>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['MobileDateTimePicker']}>
                      <DateTimePicker 
                        label={'Fecha final'}
                        value={dateEnd}
                        onChange={handleFechaFinal} 
                        renderInput={(props) => <TextField {...props} variant="standard" />}
                        openTo="day"
                      />
                      {errors.dateEnd && (
                        <p className="error-message">* Este campo es obligatorio</p>
                      )}
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>
              <div className='form-secciones'>
                <FormControl component="fieldset">
                  <label className='proceso' component="legend">PROCESO </label>
                  <RadioGroup
                    aria-label="proceso"
                    name="proceso"
                    value={proceso}
                    onChange={handleProceso}
                  >
                    <FormControlLabel value="pfo" control={<Radio />} label=" Plataforma Fibra Óptica" />
                    <FormControlLabel value="pi" control={<Radio />} label="Plataforma Inalámbrico" />
                    <FormControlLabel value="gpc" control={<Radio />} label="Gestor de plataforma de Core y B2B" />
                    <div className='otro'>
                      <FormControlLabel value="otros" control={<Radio />} label="Otros:"/> 
                      <TextField 
                        id='proceso' 
                        type='text' 
                        variant='standard' 
                        fullWidth
                        value={otroProceso}
                        onChange={handleOtroProceso}
                      />
                    </div> 
                  </RadioGroup>
                  {errors.proceso && (
                    <p className="error-message">* Este campo es obligatorio</p>
                  )}
                </FormControl>
                
              </div>
              <div className='form-secciones'>
                <FormControl component="fieldset">
                  <label className='cordinador' component="legend">CORDINADOR RESPONSABLE</label>
                  <RadioGroup
                    aria-label="cordinador"
                    name="cordinador"
                    value={cordinador}
                    onChange={handleCordinador}
                  >
                    <FormControlLabel value="gar" control={<Radio />} label="Gabriel Alberto Ramirez" />
                    <FormControlLabel value="rcg" control={<Radio />} label="Ricardo Carno Garcia" />
                    <FormControlLabel value="cms" control={<Radio />} label="Carlos Mario Serna" />
                    <FormControlLabel value="jas" control={<Radio />} label="Julio Alfredo Sejin" />
                    <FormControlLabel value="lag" control={<Radio />} label="Luis Alberto Gaviria" />
                    <FormControlLabel value="dhc" control={<Radio />} label="Diego Hernan Ceballos" />
                    <FormControlLabel value="jmp" control={<Radio />} label="Jorge Mario Patiño Betancur" />
                    <div className='otro'>
                      <FormControlLabel value="otros" control={<Radio />} label="Otros: "/> 
                      <TextField 
                        id='cordinador' 
                        type='text' 
                        variant='standard' 
                        fullWidth 
                        value={otroCordinador}
                        onChange={handleOtroCordinador}
                        />
                    </div>  
                  </RadioGroup>
                  {errors.cordinador && (
                    <p className="error-message">* Este campo es obligatorio</p>
                  )}
                </FormControl>
              </div>
              <div className='form-secciones'>
                <div className="form-datos-trabajador">
                  <label htmlFor="cedula1">CEDULA TECNICO 1</label>
                  <TextField 
                    type='text' 
                    id='cedula1' 
                    label="Escribe aqui" 
                    variant="standard" 
                    value={cedula}
                    onChange={handleCedula}
                    fullWidth 
                    helperText={errors.cedula ? '* Este campo es obligatorio' : ''}
                    error={errors.cedula}
                    />
                </div>
                <div className="form-datos-trabajador">
                  <label htmlFor="tecnico1">NOMBRE TECNICO 1</label>
                  <TextField 
                    type='text' 
                    id='tecnico1'
                    label="Escribe aqui" 
                    variant="standard" 
                    value={nombre}
                    onChange={handleNombre}
                    fullWidth 
                    helperText={errors.nombre ? '* Este campo es obligatorio' : ''}
                    error={errors.nombre}
                    />
                </div>

                <div className="form-datos-trabajador">
                  <label htmlFor="cedula2">CEDULA TECNICO 2</label>
                  <TextField 
                    type='text' 
                    id='cedula2' 
                    label="Escribe aqui" 
                    variant="standard" 
                    value={cedula2}
                    onChange={handleCedula2}
                    fullWidth 
                    helperText={errors.cedula2 ? '* Este campo es obligatorio' : ''}
                    error={errors.cedula2}
                    />
                </div>
                <div className="form-datos-trabajador">
                  <label htmlFor="tecnico2">NOMBRE TECNICO 2</label>
                  <TextField 
                    type='text' 
                    id='tecnico2'
                    label="Escribe aqui" 
                    variant="standard" 
                    value={nombre2}
                    onChange={handleNombre2}
                    fullWidth 
                    helperText={errors.nombre2 ? '* Este campo es obligatorio' : ''}
                    error={errors.nombre2}
                    />
                </div>
                <div className="form-datos-trabajador">
                  <label htmlFor="cedula3">CEDULA TECNICO 3</label>
                  <TextField 
                    type='text' 
                    id='cedula3' 
                    label="Escribe aqui" 
                    variant="standard" 
                    value={cedula3}
                    onChange={handleCedula3}
                    fullWidth 

                    />
                </div>
                <div className="form-datos-trabajador">
                  <label htmlFor="tecnico3">NOMBRE TECNICO 3</label>
                  <TextField 
                    type='text' 
                    id='tecnico3'
                    label="Escribe aqui" 
                    variant="standard" 
                    value={nombre3}
                    onChange={handleNombre3}
                    fullWidth 

                    />
                </div>
                <div className="form-datos-trabajador">
                  <label htmlFor="cedula4">CEDULA TECNICO 4</label>
                  <TextField 
                    type='text' 
                    id='cedula4' 
                    label="Escribe aqui" 
                    variant="standard" 
                    value={cedula4}
                    onChange={handleCedula4}
                    fullWidth 
                    />
                </div>
                <div className="form-datos-trabajador">
                  <label htmlFor="tecnico4">NOMBRE TECNICO 4</label>
                  <TextField
                    type='text' 
                    id='tecnico4'
                    label="Escribe aqui" 
                    variant="standard" 
                    value={nombre4}
                    onChange={handleNombre4}
                    fullWidth 
                    />
                </div>

              </div>
              <div className='form-secciones'>
                <label htmlFor="observacion">OBSERVACION</label>
                <TextField 
                  type='text' 
                  id='Localidad' 
                  label="Escribe aqui" 
                  variant="standard" 
                  value={observacion}
                  onChange={handleObservacion}
                  fullWidth 
                  helperText={errors.observacion ? '* Este campo es obligatorio' : ''}
                  error={errors.observacion}
                />
              </div>
            </div>
           
            <div className='boton'>
              <Button variant="contained" onClick={handleOpenAlert} >ENVIAR</Button>
              <Dialog open={openAlert} onClose={handleCloseAlert}>
                <DialogTitle style={{paddingLeft: '20%'}}>DATOS PARA ENVIAR</DialogTitle>
                <DialogContent>
                  <div className='datos-alerta'>
                    <p className='alert-title'>¡Revise los datos antes de Enviar!</p>
                    <label className='list-date-alert'>Proceso: {proceso}</label>
                    <label className='list-date-alert'>Nombre Proceso: {otroProceso}</label>
                    <label className='list-date-alert'>Cordinador: {cordinador}</label>
                    <label className='list-date-alert'>Nombre Cordinador: {otroCordinador}</label>
                    <label className='list-date-alert'>ticket: {ticket}</label>
                    <label className='list-date-alert'>Localidad: {localidad}</label>
                    <label className='list-date-alert'>fecha inicial: {}</label>
                    <label className='list-date-alert'>Fecha final: {}</label>
                    <label className='list-date-alert'>nombre:   {nombre}</label>
                    <label className='list-date-alert'>cedula:   {cedula}</label>
                    <label className='list-date-alert'>nombre2:  {nombre2}</label>
                    <label className='list-date-alert'>cedula2:  {cedula2}</label>
                    <label className='list-date-alert'>nombre3:  {nombre3}</label>
                    <label className='list-date-alert'>cedula3:  {cedula3}</label>
                    <label className='list-date-alert'>nombre4:  {nombre4}</label>
                    <label className='list-date-alert'>cedula4:  {cedula4}</label>
                    <label className='list-date-alert'>Observacion: {observacion}</label>
                       
                  </div>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseAlert}>Cerrar</Button>
                  <Button onClick={handleSubmit} >Aceptar</Button>
                </DialogActions>
              </Dialog>
            </div>
            {alertaVisible && (
              <div style={{ position: 'fixed', top: 20, width: '38.8%', zIndex: 1000, }}>
                <Alert severity="error" onClose={() => setAlertaVisible(false)}>Por favor completa todos los campos obligatorios.</Alert>
              </div>
            )}
          </form>
          
        </div>
      </div>
  )
}

export default Form