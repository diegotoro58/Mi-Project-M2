import mongoose from "mongoose";

const beachSchema = mongoose.Schema(
    {
        playa: {
            type: String,
            require: true
        },


        pais: {
            type: String,
            require: true
        },

        ciudad: {
            type: String,
            require: true
        },

        hoteles: {
            nombre: {
                type: [String],
                require: true
            },
            estrellas: {
                type: [Number],
                require: true
            },
        },
    },


);

export default mongoose.model("beaches", beachSchema);