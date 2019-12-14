import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import "chart.js";
import Dropzone from "dropzone";


const application = Application.start()
const context = require.context("../controllers", true, /\.js$/)
application.load(definitionsFromContext(context))
