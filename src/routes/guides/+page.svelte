<script>
    import { AccordionItem, Accordion } from 'flowbite-svelte';
  </script>
  
  <Accordion>
    <AccordionItem>
      <span slot="header">Edgebander</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">The Jade 240 edgebander is key to our operation. Responsible for the edges of our cabinet boxes, fronts, shelves and more.</p>
      <p class="text-gray-500 dark:text-gray-400">
        Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> start up the machine </a>
        .
      </p>
      <p class="text-gray-500 dark:text-gray-400">
        View this guide to learn how to <a href="/" target="_blank"
        rel="noreferrer" class="text-blue-600 dark:text-blue-500
        hover:underline"> adjust and calibrate</a> the stations for production.
      </p>
      <p class="text-gray-500 dark:text-gray-400">
        Watch this video to see how to <a href="/" target="_blank"
        rel="noreferrer" class="text-blue-600 dark:text-blue-500
        hover:underline"> clean the glue pot</a> 
        .
    </p>
    </AccordionItem>
    <AccordionItem>
      <span slot="header">Router</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">The Rover CNC Router is our tried and true workhorse. It cuts and machines panel components for each of our projects.</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul class="list-disc pl-5 dark:text-gray-400 text-gray-500">
        <li>
          <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> Lorem ipsum </a>
        </li>
        <li>
          <a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline"> Tailwind UI </a>
        </li>
      </ul>
    </AccordionItem>
  </Accordion>