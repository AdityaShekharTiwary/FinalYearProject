import React from 'react'

const home = () => {
    return (
        <div className='home-container m-5'> 
            <div className='d-flex flex-col justify-content-between'>
                <div>
                    <div className='header-text'>Super Resolution and Night vision using GAN</div>
                    <div className='header-desc mb-3'>Generative Adversarial Networks, or GANs for short, are an approach to generative modeling using deep learning methods, such as convolutional neural networks. Generative modeling is an unsupervised learning task in machine learning that involves automatically discovering and learning the regularities or patterns in input data in such a way that the model can be used to generate or output new examples that plausibly could have been drawn from the original dataset.GANs will have two different networks Generator and a Discriminator. Generator generates the data, which is cross checked by the discriminator. The loss found is rectifided through backpropagation. SR-GAN downsamples the high resolution images to create Low resolution images for training and Generater generates super resolution images and that is cross checked by the Discriminator.</div>


                    <div className='header-desc'>We will be generating higher resolution images from lower resolution data. For this, we are proposing a generative adversarial network architecture which is a dual neural network designed to generate lifelike images .To apply this technique to our problem statement we are using generator as the network to improve the resolution and discriminator as a network to train generator better. We used transfer learning in our generative neural network and training our discriminator from scratch and using the perceptual loss to train our network. 
</div>
                </div>
                <div>
                    <img className="home-img" src ='./images/homeImg.jpg'/>
                </div>
            </div>
            

        </div>
    )
}

export default home;