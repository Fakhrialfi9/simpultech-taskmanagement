import pagesStyle from "../../../assets/style/views/pages.module.css";
import { ChevronDown, Ellipsis, Clock, Pencil } from "lucide-react";

const FormNewTask = () => {
  return (
    <li>
      <form action='' className={pagesStyle.newtaskform}>
        <div className={pagesStyle.select}>
          <input type='checkbox' />
        </div>

        <div className={pagesStyle.information}>
          <div className={pagesStyle.header}>
            <div className={pagesStyle.title}>
              <input type='text' name='name' placeholder='Type New Task Title' />
            </div>
            <div className={pagesStyle.function}>
              <span>
                <ChevronDown size={20} />
              </span>
              <span>
                <Ellipsis size={20} />
              </span>
            </div>
          </div>
          <div className={pagesStyle.body}>
            <span>
              <Clock size={20} />
            </span>
            <input type='date'></input>
          </div>
          <div className={pagesStyle.footer}>
            <span>
              <Pencil size={20} />
            </span>
            <input type='text' name='name' placeholder='Type News Task Description' />
          </div>
        </div>
      </form>
    </li>
  );
};

export default FormNewTask;
