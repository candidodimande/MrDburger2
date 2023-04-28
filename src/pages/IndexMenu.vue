<template>
    <q-page class="bg-grey-10">
        <div style="position: relative;" class="">
          
            <div class="main-bgcolor q-pa-sm q-pb-xl" style="border-radius: 0 0 50% 50%; padding-bottom: 70px;">
            <div class="q-pt-lg text-center">
              <q-img
                class=""
                style="width: 100px; position: relative;"
                src="/logo/cin.png"
              />
            </div>
            </div>
       
            <div class="text-center bg-red q-pa-md  text-white" style="width: 50%; position: absolute; top: 70%; left: 50%; transform: translate(-50%); font-size: 22px; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; border-radius: 10px; font-style: italic; letter-spacing: 2px; text-shadow: 0 2px 2px 0 black;">
                Menu
            </div>
        </div>

        <div class="text-white">
          <h1 class="q-px-lg" style="margin-bottom: 0; padding-bottom: 0; font-size: 30px;">Pizza</h1>
        
        <q-list class="bg-re">
          <q-item class="q-mt-s" style="margin-top: -20px;">
            <q-item-section top avatar>
              <q-avatar>
                  <img src="/bg/pizza.jpg">
              </q-avatar>
            </q-item-section>
            <q-item-section>
                <q-item-label style="font-size: 18px;">Mr. D Special</q-item-label>
                <q-item-label class="text-white" caption style="text-align: left; opacity: 60%; letter-spacing: 3px;">Tomate, Mozarella, Peperoni, Bife, Chicken, Fiambre e Azeitona</q-item-label>
            </q-item-section>
              <q-item-section side top class="">
                <div class="text-center">
                  <q-item-label style="font-size: 15px; font-weight: lighter;" class="text-white"  caption>200mt</q-item-label>
                  <q-item-label style="font-size: 15px; font-weight: lighter;" class="text-white" caption>small</q-item-label>
               </div>
            </q-item-section>

            <q-item-section side top class="">
                <div class="text-center">
                  <q-item-label style="font-size: 15px; font-weight: lighter;" class="text-white" caption>400mt</q-item-label>
                  <q-item-label style="font-size: 15px; font-weight: lighter;" class="text-white" caption>Medium</q-item-label>
                </div>
            </q-item-section>
            <q-item-section side top class="">
                <div class="text-center">
                  <q-item-label style="font-size: 15px; font-weight: lighter;" class="text-white" caption>600mt</q-item-label>
                  <q-item-label style="font-size: 15px; font-weight: lighter;" class="text-white" caption>Large</q-item-label>
                </div>
            </q-item-section>
          </q-item>

          <div style="position: relative;">
            <q-btn class="q-ma-sm" outline style=" position: absolute; top: -8vh; left: 8vh; color: goldenrod; margin-left: 50%;" label="Comprar" />
          </div>

          <q-separator style="margin-bottom: 30px;" spaced inset="item"/>

          <q-item class="q-mt-s q-mb-xl" style="margin-top: -20px;">
            <q-item-section top avatar>
              <q-avatar>
                  <img src="/bg/pizza.jpg">
              </q-avatar>
            </q-item-section>
            <q-item-section>
                <q-item-label style="font-size: 18px;">Atum</q-item-label>
                <q-item-label class="text-white" caption style="opacity: 60%;">Tomate, Mozarella e Atum</q-item-label>
            </q-item-section>
            <q-item-section side top class="">
                <div class="text-center">
                  <q-item-label style="font-size: 15px; font-weight: lighter;" class="text-white" caption>
                    200mt
                  </q-item-label>
                  <q-item-label style="font-size: 15px; font-weight: lighter;" class="text-white" caption>
                    small
                  </q-item-label>
                </div>
            </q-item-section>

            <q-item-section side top class="">
                <div class="text-center">
                  <q-item-label style="font-size: 15px; font-weight: lighter;" class="text-white" caption>
                    400mt
                  </q-item-label>
                  <q-item-label style="font-size: 15px; font-weight: lighter;" class="text-white" caption>
                    medium
                  </q-item-label>
               </div>
            </q-item-section>
            <q-item-section side top class="">
                <div class="text-center">
                  <q-item-label style="font-size: 15px; font-weight: lighter;" class="text-white" caption>
                    600mt
                  </q-item-label>
                  <q-item-label style="font-size: 15px; font-weight: lighter;" class="text-white" caption>
                    large
                  </q-item-label>
                </div>
            </q-item-section>
          </q-item>

          <div style="position: relative;">
            <q-btn class="q-ma-sm" outline style=" position: absolute; top: -8vh; left: 8vh; color: goldenrod; margin-left: 50%;" label="Comprar" />
          </div>

          <q-separator style="margin-bottom: 30px;" spaced inset="item" />

          <q-item class="q-mt-s" style="margin-top: -20px;">
            <q-item-section top avatar>
              <q-avatar>
                  <img src="/bg/pizza.jpg">
              </q-avatar>
            </q-item-section>
            <q-item-section>
                <q-item-label>Great For Meat</q-item-label>
                <q-item-label class="text-white" caption style="text-align: justify;">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
            </q-item-section>
            <q-item-section side top class="">
                <div class="">
                  <q-item-label class="text-white" caption>
                    200mt
                  </q-item-label>
                  <q-item-label class="text-white" caption>
                    small
                  </q-item-label>
                </div>
            </q-item-section>

            <q-item-section side top class="">
                <div class="">
                  <q-item-label class="text-white" caption>
                    400mt
                  </q-item-label>
                  <q-item-label class="text-white" caption>
                    medium
                  </q-item-label>
               </div>
            </q-item-section>
            <q-item-section side top class="">
                <div class="">
                  <q-item-label class="text-white" caption>
                    600mt
                  </q-item-label>
                  <q-item-label class="text-white" caption>
                    large
                  </q-item-label>
                </div>
            </q-item-section>
          </q-item>

          <div style="position: relative;">
            <q-btn class="q-ma-sm" outline style=" position: absolute; top: -8vh; left: 8vh; color: goldenrod; margin-left: 50%;" label="Comprar" />
          </div>

          <q-separator style="margin-bottom: 30px;" spaced inset="item" />

          <q-item class="q-mt-s" style="margin-top: -20px;">
            <q-item-section top avatar>
              <q-avatar>
                  <img src="/bg/pizza.jpg">
              </q-avatar>
            </q-item-section>
            <q-item-section>
                <q-item-label>Chicken and Fiambre</q-item-label>
                <div class="box">
                  <q-item-label class="text-white" caption style="text-align: justify;">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
                </div>
            </q-item-section>
            
            <q-item-section side top class="">
                <div class="">
                  <q-item-label class="text-white" caption>
                    200mt
                  </q-item-label>
                  <q-item-label class="text-white" caption>
                    small
                  </q-item-label>
                </div>
            </q-item-section>

            <q-item-section side top class="">
                <div class="">
                  <q-item-label class="text-white" caption>
                    400mt
                  </q-item-label>
                  <q-item-label class="text-white" caption>
                    medium
                  </q-item-label>
               </div>
            </q-item-section>
            <q-item-section side top class="">
                <div class="">
                  <q-item-label class="text-white" caption>
                    600mt
                  </q-item-label>
                  <q-item-label class="text-white" caption>
                    large
                  </q-item-label>
                </div>
            </q-item-section>
          </q-item>

          <div style="position: relative;">
            <q-btn class="q-ma-sm" outline style=" position: absolute; top: -8vh; left: 8vh; color: goldenrod; margin-left: 50%;" label="Comprar" />
          </div>

          <q-separator style="margin-bottom: 30px;" spaced inset="item" />

          <q-item class="q-mt-s" style="margin-top: -20px;">
            <q-item-section top avatar>
              <q-avatar>
                  <img src="/bg/pizza.jpg">
              </q-avatar>
            </q-item-section>
            <q-item-section>
                <q-item-label>Avaiana</q-item-label>
                <q-item-label class="text-white" caption style="text-align: justify;">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
            </q-item-section>
            <q-item-section side top class="">
                <div class="">
                  <q-item-label class="text-white" caption>
                    200mt
                  </q-item-label>
                  <q-item-label class="text-white" caption>
                    small
                  </q-item-label>
                </div>
            </q-item-section>

            <q-item-section side top class="">
                <div class="">
                  <q-item-label class="text-white" caption>
                    400mt
                  </q-item-label>
                  <q-item-label class="text-white" caption>
                    medium
                  </q-item-label>
                </div>
            </q-item-section>
            <q-item-section side top class="text-white">
                <div class="box">
                  <q-item-label class="text-white" caption>
                    600mt
                  </q-item-label>
                  <q-item-label class="text-white" caption>
                    large
                  </q-item-label>
                </div>
            </q-item-section>
          </q-item>

          <div style="position: relative;">
            <q-btn class="q-ma-sm" outline style=" position: absolute; top: -8vh; left: 8vh; color: goldenrod; margin-left: 50%;" label="Comprar" />
          </div>

        </q-list>

        <h1 class="q-px-lg" style="margin-bottom: 0; padding-bottom: 0; font-size: 30px;">Pizza</h1>

        <q-list>
          <q-item class="q-mt-s" style="margin-top: -20px;">
            <q-item-section top avatar>
              <q-avatar>
                  <img src="/bg/pizza.jpg">
              </q-avatar>
            </q-item-section>
            <q-item-section>
                <q-item-label>Mr. D Special</q-item-label>
                <q-item-label caption style="text-align: justify;">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
            </q-item-section>
              <q-item-section side top class="">
                <div class="">
                  <q-item-label caption>200mt</q-item-label>
                  <q-item-label caption>small</q-item-label>
                </div>
            </q-item-section>

            <q-item-section side top class="">
                <div class="">
                  <q-item-label caption>400mt</q-item-label>
                  <q-item-label caption>small</q-item-label>
                </div>
            </q-item-section>
            <q-item-section side top class="">
                <div class="">
                  <q-item-label caption>600mt</q-item-label>
                  <q-item-label class="text-white" caption>small</q-item-label>
                </div>
            </q-item-section>
          </q-item>

          <q-separator style="margin-bottom: 30px;" spaced inset="item" />

          <q-item class="q-mt-s" style="margin-top: -20px;">
            <q-item-section top avatar>
              <q-avatar>
                  <img src="/bg/pizza.jpg">
              </q-avatar>
            </q-item-section>
            <q-item-section>
                <q-item-label>Mr. D receipt </q-item-label>
                <q-item-label caption style="text-align: justify;">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
            </q-item-section>
            <q-item-section side top class="">
                <div class="">
                  <q-item-label caption>
                    200mt
                  </q-item-label>
                  <q-item-label caption>
                    small
                  </q-item-label>
                </div>
            </q-item-section>

            <q-item-section side top class="">
                <div class="">
                  <q-item-label class="text-white" caption>
                    400mt
                  </q-item-label>
                  <q-item-label caption>
                    medium
                  </q-item-label>
                </div>
            </q-item-section>
            <q-item-section side top class="">
                <div class="text-white">
                  <q-item-label class="text-white" caption>
                    600mt
                  </q-item-label>
                  <q-item-label caption>
                    large
                  </q-item-label>
                </div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-page>
</template>

<style>
  .box {
    color: white;
    font-size: 10px; 
  }
     
</style>