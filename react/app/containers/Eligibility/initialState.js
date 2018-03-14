const initialJSState = {
    isSubmitting: false,
    name: {
        fname: {
            v: '',
            em: '',
            ev: false
        },
        lname: {
            v: '',
            em: '',
            ev: false
        }
    },
    gender: {
        dob: {
            v: '',
            em: '',
            ev: false
        },
        gender: {
            v: 'male',
            em: '',
            ev: false
        }
    },
    city: {
        zip: {
            v: '',
            em: '',
            ev: false
        },
        salary: {
            v: '',
            em: '',
            ev: false
        }
    },
    pan: {
        pan: {
            v: '',
            em: '',
            ev: false,
        },
        checkBox: {
            v: true,
            em: 'Please check this',
            ev: false,
        }
    },
    details: {
        confirmz: {
            v: true,
            em: 'Please check this',
            ev: false,
        }
    }
}

export default initialJSState;