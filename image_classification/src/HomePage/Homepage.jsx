import './Homepage.css'
import React, { useState } from 'react';
import ResNetAccuracyGraph from '../assets/resNetAccuracy.png'
import ResNetLossGraph from '../assets/ResNetLoss.png'
import ResNetFTAccuracy from '../assets/resnetFinetuneAccuracy.png'
import ResNetFTLoss from '../assets/resnetFineTuneLoss.png'
import NN_TunedAccuracyGraph from '../assets/NN_TunedAccuracy.png'
import NN_TunedLossGraph from '../assets/NN_TunedLoss.png'
import FNNPrediction from '../assets/FNNPrediction.png'
import MobileNetV2Accuracy from '../assets/MobileV2Accuracy.png'
import MobileNetV2Loss from '../assets/MobileNetLoss.png'
import MobileNetV2FTAccuracy from '../assets/MobileNetFTLoss.png'
import MobileNetV2FTLoss from '../assets/MobileNetFTAccuracy.png'
import MobileNetPrediction from '../assets/MobileNetPrediction.png'

import resNet50Prediction from '../assets/resNetPredictions.png'

const Homepage = () => {

    const [selectedModel, setSelectedModel] = useState(null);

    const modelOutputs = {
        "Finetuned Nueral Network": [],
        "MobileNetV2": [],
        "MobileNetV2 Finetuned": [],
        "ResNet50": [],
        "ResNet50 Finetuned": [],
    };

    const predictions = {
        "Finetuned Nueral Network": [FNNPrediction],
        "MobileNetV2": [],
        "MobileNetV2 Finetuned": [MobileNetPrediction],
        "ResNet50": [],
        "ResNet50 Finetuned": [resNet50Prediction],
    }

    const graphOutputs = {
        "Finetuned Nueral Network": [NN_TunedAccuracyGraph, NN_TunedLossGraph],
        "MobileNetV2": [MobileNetV2Accuracy, MobileNetV2Loss],
        "MobileNetV2 Finetuned": [MobileNetV2FTAccuracy, MobileNetV2FTLoss],
        "ResNet50": [ResNetAccuracyGraph, ResNetLossGraph],
        "ResNet50 Finetuned": [ResNetFTAccuracy, ResNetFTLoss],
    }

    return (
    <div className="HomePage">
        <header className="Header">
            <h1 className='Title'>
                Food Classification
            </h1>
        </header>

        <div className='modelsTitle'>
            <h2 className='modelTitle'>Models</h2>
        </div>

        <div className='modelButtons'>
            {Object.keys(modelOutputs).map((label) => (
                <button
                    key={label}
                    onClick={() => setSelectedModel(label)}
                    className={`model-button ${selectedModel === label ? 'active' : ''}`}
                >
                {label}
                </button>
            ))}
        </div>

        <div className='graphOutputs'>
                {selectedModel ? (
                    graphOutputs[selectedModel].map((imageSrc, index) => (
                        <img key={index} src={imageSrc} alt={`Output ${index + 1}`} className='graphImage' />
                    ))
                ) : (
                    <p>Please select a model to view outputs.</p>
                )}
        </div>

        <div className='predictionOutputs'>
                {selectedModel ? (
                    predictions[selectedModel].map((imageSrc, index) => (
                        <img key={index} src={imageSrc} alt={`Output ${index + 1}`} className='predictionImage' />
                    ))
                ) : (
                    <p>Please select a model to view outputs.</p>
                )}
        </div>
    </div>
    );
}

export default Homepage